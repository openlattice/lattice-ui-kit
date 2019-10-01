/*
 * @flow
 */

import styled from 'styled-components';

import * as Colors from '../../../../../colors';

const { NEUTRALS, PURPLES, WHITE } = Colors;

const NavigationDrawer = styled.nav`
  background-color: ${WHITE};
  bottom: 0;
  box-shadow: 10px 0 50px -10px #969696;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 300px;
  overflow: scroll;
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

export default NavigationDrawer;
