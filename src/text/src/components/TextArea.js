// @flow
import { forwardRef } from 'react';

import { TextField } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core';

const TextArea = forwardRef<TextFieldProps, TextField>((props, ref) => (
  <TextField
      fullWidth
      variant="filled"
      multiline
      rows={3}
      inputProps={{
        style: { resize: 'vertical' }
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref} />
));

export default TextArea;
