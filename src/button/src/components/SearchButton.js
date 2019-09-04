/*
 * @flow
 */

import React from 'react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';

import IconButton from './IconButton';
import type { Props } from './Button';

/* eslint-disable react/jsx-props-no-spreading */
const SearchButton = (props :Props) => (
  <IconButton icon={faSearch} {...props} />
);
/* eslint-enable */

export default SearchButton;
