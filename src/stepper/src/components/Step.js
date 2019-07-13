// @flow

import React, { Component } from 'react';
import type { ChildrenArray } from 'react';

import StepIcon from './StepIcon';
import { StepWrapper, StepLabel } from './styled';

type Props = {
  active :boolean;
  children :ChildrenArray<any>;
  complete :boolean;
  disabled ? :boolean;
  index :number;
  onClick :(e :SyntheticEvent<HTMLElement>) => void;
};

class Step extends Component<Props> {

  static defaultProps = {
    disabled: false
  };

  renderDefault = () => {
    const {
      active,
      children,
      complete,
      index,
    } = this.props;
    return (
      <>
        <StepIcon
            active={active}
            complete={complete}
            index={index} />
        <StepLabel active={active}>{children}</StepLabel>
      </>
    );
  }

  renderComposed = () => {
    const {
      active,
      children,
      complete,
      disabled,
      index,
    } = this.props;

    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          active,
          complete,
          disabled,
          index,
          ...child.props
        });
      }

      return child;
    });

  }

  render() {
    const {
      children,
      onClick
    } = this.props;
    return (
      <StepWrapper onClick={onClick}>
        {
          React.isValidElement(children)
            ? this.renderComposed()
            : this.renderDefault()
        }
      </StepWrapper>
    );
  }
}

export default Step;
