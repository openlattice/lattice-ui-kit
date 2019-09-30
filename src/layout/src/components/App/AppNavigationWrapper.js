/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import styled from 'styled-components';

import * as Colors from '../../../../colors';
import { AppContentInnerWrapper, AppContentOuterWrapper } from './AppContentWrapper';
import { APP_CONTENT_PADDING } from '../../../../style/Sizes';

const { NEUTRALS, PURPLES, WHITE } = Colors;
const APP_NAV_ROOT :string = 'app-nav-root';

const AppNavigationOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
  bgColor: WHITE,
})`
  border-bottom: 1px solid ${NEUTRALS[5]};
`;

const AppNavigationInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

const NavigationContentWrapper = styled.nav`
  display: flex;
  flex: 0 0 auto;
  height: 100%;
  min-height: 60px;
  justify-content: flex-start;

  > a {
    align-items: center;
    border-bottom: 3px solid transparent;
    color: ${NEUTRALS[1]};
    display: flex;
    font-size: 12px;
    font-weight: normal;
    justify-content: center;
    letter-spacing: normal;
    line-height: 18px; /* font-size (12px) * desired line-height (1.5) = 18px */
    margin: 0 0 0 30px;
    outline: none;
    padding: 3px 3px 0px 3px;
    text-align: center;
    text-decoration: none;

    &:first-child {
      margin: 0;
    }

    &:focus {
      outline: none;
      text-decoration: none;
    }

    &:hover {
      border-bottom: 3px solid ${NEUTRALS[2]};
      color: ${NEUTRALS[0]};
      cursor: pointer;
    }

    &.active {
      border-bottom: 3px solid ${PURPLES[1]};
      color: ${PURPLES[1]};
    }

    &.${APP_NAV_ROOT} {
      border: none;
      margin: 0;
      padding: 0;

      > h1 {
        color: ${NEUTRALS[0]};
        font-size: 14px;
        font-weight: 600;
        letter-spacing: normal;
        margin: 0;
        padding: 0;
      }

      > img {
        height: 26px;
        margin-right: 10px;
      }
    }
  }
`;

type Props = {
  children :Node;
  className :?string;
  forwardedRef :any;
};

class AppNavigationWrapper extends Component<Props> {

  render() {

    const {
      children,
      className,
      forwardedRef,
    } = this.props;

    return (
      <AppNavigationOuterWrapper className={className}>
        <AppNavigationInnerWrapper>
          <NavigationContentWrapper ref={forwardedRef}>
            {children}
          </NavigationContentWrapper>
        </AppNavigationInnerWrapper>
      </AppNavigationOuterWrapper>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <AppNavigationWrapper className={props.className} forwardedRef={ref}>
    {props.children}
  </AppNavigationWrapper>
));

export {
  APP_NAV_ROOT,
  AppNavigationInnerWrapper,
  AppNavigationOuterWrapper,
  NavigationContentWrapper,
};
