/*
 * @flow
 */

import { forwardRef } from 'react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputAdornment, TextField } from '@material-ui/core';

const SearchIcon = (
  <InputAdornment position="start">
    <FontAwesomeIcon icon={faSearch} />
  </InputAdornment>
);

const SearchInput = forwardRef<Object, TextField>((props, ref) => {

  const {
    fullWidth = true,
    type = 'text',
    variant,
    ...other
  } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <TextField
        {...other} // eslint-disable-line indent
        InputProps={{ startAdornment: SearchIcon }}
        fullWidth={fullWidth}
        ref={ref}
        type={type}
        variant="outlined" />
  );
  /* eslint-enable */
});

export default SearchInput;
