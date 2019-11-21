// @flow
import React from 'react';
import styled from 'styled-components';

import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const { NEUTRALS, PURPLES, WHITE } = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  primary: PURPLES[2],
  secondary: PURPLES[5],
  subtle: WHITE,
}, NEUTRALS[6]);

const getFontColor = getStyleVariation('mode', {
  primary: WHITE,
  secondary: PURPLES[1],
  subtle: PURPLES[2],
}, NEUTRALS[0]);

const BadgeWrapper = styled.span`
  background-color: ${getBackgroundColor};
  border-radius: 2em;
  color: ${getFontColor};
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  text-align: center;
`;

type Props = {
  className ? :string;
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
