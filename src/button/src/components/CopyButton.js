/*
 * @flow
 */

import React from 'react';

import { faCopy } from '@fortawesome/pro-regular-svg-icons';

import IconButton from './IconButton';
import type { Props } from './Button';

/* eslint-disable react/jsx-props-no-spreading */
const CopyButton = (props :Props) => (
  <IconButton icon={faCopy} {...props} />
);
/* eslint-enable */

export default CopyButton;
