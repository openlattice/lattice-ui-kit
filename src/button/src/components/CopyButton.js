/*
 * @flow
 */

import React from 'react';

import { faCopy } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from './IconButton';
import type { Props } from './IconButton';

const icon = (
  <FontAwesomeIcon icon={faCopy} />
);

/* eslint-disable react/jsx-props-no-spreading */
const CopyButton = (props :Props) => (
  <IconButton icon={icon} {...props} />
);
/* eslint-enable */

export default CopyButton;
