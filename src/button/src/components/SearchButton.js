/*
 * @flow
 */

import React from 'react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from './IconButton';
import type { Props } from './Button';

const icon = (
  <FontAwesomeIcon icon={faSearch} />
);

/* eslint-disable react/jsx-props-no-spreading */
const SearchButton = (props :Props) => (
  <IconButton icon={icon} {...props} />
);
/* eslint-enable */

export default SearchButton;
