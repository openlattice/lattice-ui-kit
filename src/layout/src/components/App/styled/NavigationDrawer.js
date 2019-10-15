/*
 * @flow
 */

import styled from 'styled-components';

import { NEUTRALS, PURPLES, WHITE } from '../../../../../colors';

const NavigationDrawer = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;

  > a {
    background-color: ${WHITE};
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
