/*
 * @flow
 */

import React from 'react';

import { faPen } from '@fortawesome/pro-solid-svg-icons';

import IconButton from './IconButton';
import type { Props } from './Button';

/* eslint-disable react/jsx-props-no-spreading */
const EditButton = (props :Props) => (
  <IconButton icon={faPen} {...props} />
);
/* eslint-enable */

export default EditButton;
