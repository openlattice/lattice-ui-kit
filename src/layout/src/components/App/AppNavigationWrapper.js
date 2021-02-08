/*
 * @flow
 */

import type { Node } from 'react';
import { forwardRef, Component } from 'react';

import AppNavigationInnerWrapper from './styled/AppNavigationInnerWrapper';
import AppNavigationOuterWrapper from './styled/AppNavigationOuterWrapper';
import NavigationDrawer from './styled/NavigationDrawer';
import NavigationWrapper from './styled/NavigationWrapper';

import Drawer from '../../../../drawer/src/components/Drawer';
import * as Colors from '../../../../colors';

const { WHITE } = Colors;

// have to use the optional prop syntax because of React.forwardRef below
// https://github.com/facebook/flow/issues/7467
type Props = {
  bgColor ?:string;
  borderless ?:boolean;
  children :Node;
  className ?:string;
  drawer ?:boolean;
  forwardedRef ?:any;
  isOpen ?:boolean;
  onClose ?:() => void;
};

class AppNavigationWrapper extends Component<Props> {

  static defaultProps = {
    bgColor: WHITE,
    borderless: false,
    className: undefined,
    drawer: false,
    forwardedRef: undefined,
    isOpen: false,
    onClose: undefined,
  }

  render() {

    const {
      bgColor,
      borderless,
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
      <AppNavigationOuterWrapper borderless={borderless} bgColor={bgColor} className={className}>
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
export default forwardRef<Props, HTMLElement>((props, ref) => (
  <AppNavigationWrapper
      borderless={props.borderless}
      bgColor={props.bgColor}
      className={props.className}
      drawer={props.drawer}
      forwardedRef={ref}
      isOpen={props.isOpen}
      onClose={props.onClose}>
    {props.children}
  </AppNavigationWrapper>
));
