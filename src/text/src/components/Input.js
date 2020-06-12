// @flow
import React from 'react';

import { TextField } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core';

const Input = React.forwardRef<TextFieldProps, TextField>((props, ref) => (
  <TextField
      fullWidth
      variant="filled"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default Input;
