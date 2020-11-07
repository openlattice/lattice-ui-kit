// @flow
import React from 'react';

import styled from 'styled-components';

import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const { NEUTRAL, PURPLE } = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  primary: PURPLE.P300,
  secondary: PURPLE.P100,
  subtle: 'white',
}, NEUTRAL.N100);

const getFontColor = getStyleVariation('mode', {
  primary: 'white',
  secondary: PURPLE.P400,
  subtle: PURPLE.P300,
}, NEUTRAL.N700);

const BadgeWrapper = styled.span`
  background-color: ${getBackgroundColor};
  border-radius: 2em;
  color: ${getFontColor};
  font-size: 12px;
  font-weight: 600;
  padding: 0.1875em 0.5em;
  text-align: center;
`;

type Props = {
  className ?:string;
  count :number;
  max ?:number;
  mode ?:string;
};

const Badge = ({
  className,
  count,
  max,
  mode
} :Props) => (
  <BadgeWrapper className={className} mode={mode}>
    {
      (max !== undefined && count > max)
        ? `${max}+`
        : count
    }
  </BadgeWrapper>
);

Badge.defaultProps = {
  className: undefined,
  max: 999,
  mode: 'default',
};

export default Badge;
