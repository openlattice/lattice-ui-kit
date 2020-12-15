/*
 * @flow
 */

import React from 'react';

import { TextField } from '@material-ui/core';

const Input = React.forwardRef<Object, TextField>((props, ref) => {

  const {
    fullWidth = true,
    variant,
    ...other
  } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <TextField
        {...other} // eslint-disable-line indent
        fullWidth={fullWidth}
        variant="filled"
        ref={ref} />
  );
  /* eslint-enable */
});

export default Input;
