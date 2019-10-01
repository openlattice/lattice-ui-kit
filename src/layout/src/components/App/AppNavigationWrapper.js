/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import isFunction from 'lodash/isFunction';

import * as Colors from '../../../../colors';
import {
  AppNavigationInnerWrapper,
  AppNavigationOuterWrapper,
  NavigationDrawer,
  NavigationDrawerWrapper,
  NavigationWrapper,
} from './styled/StyledNavigationComponents';

const { WHITE } = Colors;

type Props = {
  children :Node;
  className :?string;
  drawer :boolean;
  forwardedRef :any;
  headerBounds :?DOMRect;
  isOpen :?boolean;
  onClose :?() => void;
};

class AppNavigationWrapper extends Component<Props> {

  static defaultProps = {
    drawer: false,
    headerBounds: undefined,
    isOpen: false,
    onClose: undefined,
  }

  close = () => {

    const { onClose } = this.props;
    if (onClose && isFunction(onClose)) {
      onClose();
    }
  }

  handleOnClick = (event :SyntheticEvent<HTMLElement>) => {

    if (event.target === event.currentTarget) {
      event.preventDefault();
      this.close();
    }
  }

  render() {

    const {
      children,
      className,
      drawer,
      forwardedRef,
      headerBounds,
      isOpen,
    } = this.props;

    if (drawer) {

      if (!isOpen) {
        return null;
      }

      const top = headerBounds ? (headerBounds.height + headerBounds.y) : 0;
      return (
        <AppNavigationOuterWrapper borderless className={className}>
          <AppNavigationInnerWrapper vertical>
            <NavigationDrawerWrapper onClick={this.handleOnClick} topOffset={top}>
              <NavigationDrawer>
                {children}
              </NavigationDrawer>
            </NavigationDrawerWrapper>
          </AppNavigationInnerWrapper>
        </AppNavigationOuterWrapper>
      );
    }

    return (
      <AppNavigationOuterWrapper bgColor={WHITE} className={className}>
        <AppNavigationInnerWrapper>
          <NavigationWrapper ref={forwardedRef}>
            {children}
          </NavigationWrapper>
        </AppNavigationInnerWrapper>
      </AppNavigationOuterWrapper>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <AppNavigationWrapper
      className={props.className}
      drawer={props.drawer}
      forwardedRef={ref}
      headerBounds={props.headerBounds}
      isOpen={props.isOpen}
      onClose={props.onClose}>
    {props.children}
  </AppNavigationWrapper>
));
