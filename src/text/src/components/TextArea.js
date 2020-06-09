// @flow
import React from 'react';

import { TextField } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core';

const TextArea = React.forwardRef<TextFieldProps, TextField>((props, ref) => (
  <TextField
      fullWidth
      variant="filled"
      multiline
      rows={3}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default TextArea;
