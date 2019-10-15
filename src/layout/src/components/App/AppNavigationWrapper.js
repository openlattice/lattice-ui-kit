/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import AppNavigationInnerWrapper from './styled/AppNavigationInnerWrapper';
import AppNavigationOuterWrapper from './styled/AppNavigationOuterWrapper';
import NavigationDrawer from './styled/NavigationDrawer';
import NavigationWrapper from './styled/NavigationWrapper';
import * as Colors from '../../../../colors';
import Drawer from '../../../../drawer/src/components/Drawer';

const { WHITE } = Colors;

// have to use the optional prop syntax because of React.forwardRef below
// https://github.com/facebook/flow/issues/7467
type Props = {
  children :Node;
  className ?:string;
  drawer ?:boolean;
  forwardedRef ?:any;
  isOpen ?:boolean;
  onClose ?:() => void;
};

class AppNavigationWrapper extends Component<Props> {

  static defaultProps = {
    className: undefined,
    drawer: false,
    forwardedRef: undefined,
    isOpen: false,
    onClose: undefined,
  }

  render() {

    const {
      children,
      className,
      drawer,
      forwardedRef,
      isOpen,
      onClose,
    } = this.props;

    if (drawer) {

      return (
        <AppNavigationOuterWrapper borderless className={className}>
          <AppNavigationInnerWrapper vertical>
            <Drawer isOpen={isOpen} onClose={onClose} side="right">
              <NavigationDrawer>
                {children}
              </NavigationDrawer>
            </Drawer>
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
      isOpen={props.isOpen}
      onClose={props.onClose}>
    {props.children}
  </AppNavigationWrapper>
));
