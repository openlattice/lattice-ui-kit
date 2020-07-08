// @flow

import React from 'react';

import styled from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import type { CardProps } from '@material-ui/core';

import { getHoverStyles } from '../../../../utils/StyleUtils';

const StyledMuiCard = styled(MuiCard)`
  ${getHoverStyles}
`;

const Card = React.forwardRef<CardProps, MuiCard>((props, ref) => (
  <StyledMuiCard
      variant="outlined"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default Card;
