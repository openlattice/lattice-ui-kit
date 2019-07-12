// @flow

import React, { Component } from 'react';
import type { ChildrenArray } from 'react';

import StepIcon from './StepIcon';
import { StepWrapper, StepLabel } from './styled';

type Props = {
  index :number;
  active :boolean;
  complete :boolean;
  disabled ? :boolean;
  children :ChildrenArray<any>;
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
      children
    } = this.props;
    return (
      <StepWrapper>
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
