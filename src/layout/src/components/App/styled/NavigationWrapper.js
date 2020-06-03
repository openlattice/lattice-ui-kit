/*
 * @flow
 */

import styled from 'styled-components';

import * as Colors from '../../../../../colors';

const { NEUTRALS, PURPLES, PURPLE} = Colors;
const APP_NAV_ROOT :string = 'app-nav-root';

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
    padding: 3px 3px 0 3px;
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
      border-bottom: 3px solid ${PURPLE.P300};
      color: ${PURPLE.P300};
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
        margin: 0 0 0 10px;
        padding: 0;
      }

      > img {
        height: 26px;
      }
    }
  }

  > hr {
    border: none;
    border-left: 1px solid ${NEUTRALS[5]};
    margin: 0 0 0 30px;
  }
`;

export default NavigationWrapper;
export {
  APP_NAV_ROOT,
};
