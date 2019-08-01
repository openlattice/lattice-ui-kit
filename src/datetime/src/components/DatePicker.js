import React from 'react';
import { mergeDeep } from 'immutable';
import { DatePicker } from '@atlaskit/datetime-picker';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  selectProps: { styles: selectStyles },
  // @atlaskit/datetime-picker uses date-fns format tokens
  dateFormat: 'MM/DD/YYYY',
  placeholder: 'MM/DD/YYYY',
};

const LatticeDatePicker = (props) => {
  const mergedProps = mergeDeep(defaultProps, props);
  return <DatePicker {...mergedProps} />;
};

export default LatticeDatePicker;
