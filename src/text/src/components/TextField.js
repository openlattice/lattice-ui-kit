/*
 * @flow
 */

import React, { Component } from 'react';

import TextFieldTypes from './constants/TextFieldTypes';
import KeyCodes from '../../../utils/constants/KeyCodes';
import { StyledTextAreaField, StyledTextField } from './styled/StyledTextComponents';
import { isNonEmptyString } from '../../../utils/LangUtils';
import type { TextFieldType } from './constants/TextFieldTypes';

type Props = {
  className :string;
  isViewOnly :boolean;
  onChange :(value :string) => void;
  placeholderText :string;
  type :TextFieldType;
  // validate ? :(value :string) => boolean;
  value :string;
};

type State = {
  currentValue :string;
  previousValue :string;
}

type TextControl = HTMLInputElement | HTMLTextAreaElement;

class TextField extends Component<Props, State> {

  static defaultProps = {
    className: '',
    isViewOnly: false,
    placeholderText: '',
    type: TextFieldTypes.TEXT,
    // validate: undefined,
    value: '',
  };

  control :?TextControl;

  constructor(props :Props) {

    super(props);

    const { value } = props;
    const initialValue :string = isNonEmptyString(value) ? value : '';

    this.control = null;
    this.state = {
      currentValue: initialValue,
      previousValue: initialValue,
    };
  }

  componentDidUpdate(prevProps :Props, prevState :State) {

    const { onChange, value: newExternalValue } = this.props;
    const { value: oldExternalValue } = prevProps;

    console.log('prevProps: ', prevProps, 'thisProps: ', this.props);
    console.log('prevState: ', prevState, 'thisState: ', this.state);

    const { currentValue: newCurrentValue, previousValue: newPreviousValue } = this.state;
    const { currentValue: oldCurrentValue, previousValue: oldPreviousValue } = prevState;

    /*
     * in most cases, we only care about internal state changes for the value, including:
     *   - while typing inside the field
     *   - when committing internal changes via Enter, Escape, or blur
     * however, external changes to the "value" prop should reset state to the new value, only if the new external
     * value is actually different than what is already saved in state
     */
    if (oldExternalValue !== newExternalValue) {

      const newValue :string = isNonEmptyString(newExternalValue) ? newExternalValue : '';

      /*
       * invoking onChange outide of setState seems to allow React to batch the updates. if onChange is invoked as part
       * of the setState callback, it seems to cause an extra render
       */
      onChange(newValue);

      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        currentValue: newValue,
        previousValue: newValue,
      });
      /* eslint-enable */
    }
    /*
     * the intent here is to capture the case where an internal change is being committed, i.e. "currentValue" and
     * "previousValue" are now equal and represent the actual value of the field, and this change has been committed
     * via Enter, Escape, or blur.
     *
     * the "commit" is simply setting "previousValue" equal to "currentValue", but detecting it requires checking
     * 3 conditions between "this.state" and "prevState"
     *   - (this.state.previousValue === this.state.currentValue) checks for equality
     *   - (prevState.currentValue === this.state.currentValue) checks that "currentValue" did not change
     *   - (prevState.previousValue === this.state.previousValue) checks that "previousValue" did change
     */
    else if (
      newPreviousValue === newCurrentValue
      && oldCurrentValue === newCurrentValue
      && oldPreviousValue !== newPreviousValue
    ) {
      onChange(newCurrentValue);
    }
  }

  // TODO: this implementation of shouldComponentUpdate() seems to work, but it needs more attention
  shouldComponentUpdate(nextProps :Props, nextState :State) {

    const {
      className,
      isViewOnly,
      placeholderText,
      type,
      value,
    } = this.props;
    const { currentValue, previousValue } = this.state;

    const isPropsEqual :boolean = (
      className === nextProps.className
      && isViewOnly === nextProps.isViewOnly
      && placeholderText === nextProps.placeholderText
      && type === nextProps.type
      && value === nextProps.value
    );

    const isStateEqual :boolean = (
      currentValue === nextState.currentValue
      && previousValue === nextState.previousValue
    );

    console.log(isPropsEqual, isStateEqual);
    // if (isPropsEqual && isStateEqual) {
    //   return false;
    // }

    // if (nextProps.value !== value && nextProps.value === currentValue) {
    //   return false;
    // }

    console.log('shouldComponentUpdate: true');
    return true;
  }

  handleOnBlur = () => {

    // TODO: perhaps event.preventDefault() / event.stopPropagation()
    this.commitChange();
  }

  handleOnChange = (event :SyntheticInputEvent<HTMLElement>) => {

    this.setState({
      currentValue: event.target.value,
    });
  }

  handleOnKeyDown = (event :SyntheticKeyboardEvent<HTMLElement>) => {

    switch (event.key) {
      case KeyCodes.ENTER:
        this.commitChange();
        break;
      case KeyCodes.ESCAPE:
        this.escape();
        break;
      default:
        break;
    }
  }

  blur = () => {
    if (this.control) {
      this.control.blur();
    }
  }

  commitChange = () => {

    const { isViewOnly } = this.props;
    const { currentValue, previousValue } = this.state;

    if (isViewOnly) {
      return;
    }

    // TODO: validate()

    if (previousValue !== currentValue) {
      const stateChange = {
        previousValue: currentValue,
      };
      this.setState(stateChange, () => {
        // TODO: should blur be in the callback, or is it ok for it to be outside?
        this.blur();
      });
    }
    else {
      this.blur();
    }
  }

  escape = () => {

    const { isViewOnly } = this.props;
    const { previousValue } = this.state;

    if (isViewOnly) {
      return;
    }

    // TODO: validate()

    const stateChange = {
      currentValue: previousValue,
    };
    this.setState(stateChange, () => {
      // TODO: should blur be in the callback, or is it ok for it to be outside?
      this.blur();
    });
  }

  getControl = () => {

    const { type } = this.props;

    switch (type) {
      case TextFieldTypes.TEXT_AREA:
        return this.getTextAreaControl();
      case TextFieldTypes.TEXT:
      default:
        return this.getTextControl();
    }
  }

  getTextControl = () => {

    const { placeholderText, isViewOnly } = this.props;
    const { currentValue } = this.state;

    if (isViewOnly) {
      return (
        <StyledTextField
            disabled
            placeholder={placeholderText}
            type="text"
            value={currentValue} />
      );
    }

    return (
      <StyledTextField
          innerRef={(node :?HTMLInputElement) => {
            this.control = node;
          }}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
          placeholder={placeholderText}
          type="text"
          value={currentValue} />
    );
  }

  getTextAreaControl = () => {

    const { placeholderText, isViewOnly } = this.props;
    const { currentValue } = this.state;

    if (isViewOnly) {
      return (
        <StyledTextAreaField
            disabled
            placeholder={placeholderText}
            value={currentValue} />
      );
    }

    return (
      <StyledTextAreaField
          innerRef={(node :?HTMLTextAreaElement) => {
            this.control = node;
          }}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
          placeholder={placeholderText}
          value={currentValue} />
    );
  }

  render() {

    const control = this.getControl();
    console.log('render()');

    // {
    //   isNonEmptyString(header)
    //     ? <FieldHeader>{ header }</FieldHeader>
    //     : null
    // }

    return (
      <>
        {control}
      </>
    );
  }
}

export default TextField;
