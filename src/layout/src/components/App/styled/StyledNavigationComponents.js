/*
 * @flow
 */

import styled from 'styled-components';

import * as Colors from '../../../../../colors';
import { AppContentInnerWrapper, AppContentOuterWrapper } from './StyledContentComponents';
import { APP_CONTENT_PADDING } from '../../../../../style/Sizes';

const { NEUTRALS, PURPLES, WHITE } = Colors;
const APP_NAV_ROOT :string = 'app-nav-root';

const AppNavigationOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
})`
  background-color: ${({ bgColor }) => (bgColor || undefined)};
  border-bottom: ${({ borderless }) => (borderless ? undefined : `1px solid ${NEUTRALS[5]}`)};
`;

const AppNavigationInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

const NavigationWrapper = styled.nav`
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
    line-height: 1.5;
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

  > hr {
    border: none;
    border-left: 1px solid ${NEUTRALS[5]};
    margin: 0 0 0 30px;
  }
`;

const NavigationDrawerWrapper = styled.div`
  height: calc(100vh - ${({ topOffset }) => topOffset}px);
  overflow: hidden; /* this is super important as it hides the unwanted drawer box shadow */
  position: absolute;
  width: 100%;
`;

const NavigationDrawer = styled.nav`
  background-color: ${WHITE};
  bottom: 0;
  box-shadow: 10px 0 50px -10px #969696;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 300px;
  padding: 15px 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;

  > a {
    color: ${NEUTRALS[0]};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    padding: 15px 30px;
    text-decoration: none;

    &:last-child {
      margin-top: auto;
    }

    &:hover {
      background-color: ${NEUTRALS[6]};
      color: ${PURPLES[1]};
      cursor: pointer;
    }

    &.active {
      color: ${PURPLES[1]};
    }
  }

  > hr {
    border: none;
    border-top: 1px solid ${NEUTRALS[5]};
    margin: 15px 0;
    width: 100%;
  }
`;

export {
  APP_NAV_ROOT,
  AppNavigationInnerWrapper,
  AppNavigationOuterWrapper,
  NavigationDrawer,
  NavigationDrawerWrapper,
  NavigationWrapper,
};
