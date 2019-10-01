/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import isFunction from 'lodash/isFunction';

import AppNavigationInnerWrapper from './styled/AppNavigationInnerWrapper';
import AppNavigationOuterWrapper from './styled/AppNavigationOuterWrapper';
import NavigationDrawer from './styled/NavigationDrawer';
import NavigationDrawerWrapper from './styled/NavigationDrawerWrapper';
import NavigationWrapper from './styled/NavigationWrapper';
import * as Colors from '../../../../colors';

const { WHITE } = Colors;

// have to use the optional prop syntax because of React.forwardRef below
// https://github.com/facebook/flow/issues/7467
type Props = {
  children :Node;
  className ?:string;
  drawer ?:boolean;
  forwardedRef ?:any;
  headerBounds ?:ClientRect;
  isOpen ?:boolean;
  onClose ?:() => void;
};

class AppNavigationWrapper extends Component<Props> {

  static defaultProps = {
    className: undefined,
    drawer: false,
    forwardedRef: undefined,
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

      const top = headerBounds ? (headerBounds.height + headerBounds.top) : 0;
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

// https://github.com/facebook/flow/issues/7467
export default React.forwardRef<Props, HTMLElement>((props, ref) => (
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
