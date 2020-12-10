/*
 * @flow
 */

import React from 'react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputAdornment, TextField } from '@material-ui/core';

const SearchIcon = (
  <InputAdornment position="start">
    <FontAwesomeIcon icon={faSearch} />
  </InputAdornment>
);

const SearchInput = React.forwardRef<any, TextField>((props, ref) => (
  <TextField
      InputProps={{ startAdornment: SearchIcon }}
      fullWidth
      variant="outlined"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default SearchInput;
