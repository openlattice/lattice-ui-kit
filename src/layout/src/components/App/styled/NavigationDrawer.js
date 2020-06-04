/*
 * @flow
 */

import styled from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../../colors';

const NavigationDrawer = styled.nav`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;

  > span {
    background-color: white;
    color: ${NEUTRAL.N700};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    padding: 15px 30px;
    text-decoration: none;
  }

  > a {
    background-color: white;
    color: ${NEUTRAL.N700};
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
      background-color: ${NEUTRAL.N100};
      color: ${PURPLE.P300};
      cursor: pointer;
    }

    &.active {
      color: ${PURPLE.P300};
    }
  }

  > hr {
    border: none;
    border-top: 1px solid ${NEUTRAL.N100};
    margin: 15px 0;
    width: 100%;
  }
`;

export default NavigationDrawer;
