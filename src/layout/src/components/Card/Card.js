// @flow

import React from 'react';

import { Card as MuiCard } from '@material-ui/core';
import type { CardProps } from '@material-ui/core';

const Card = React.forwardRef<CardProps, MuiCard>((props, ref) => (
  <MuiCard
      variant="outlined"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default Card;
