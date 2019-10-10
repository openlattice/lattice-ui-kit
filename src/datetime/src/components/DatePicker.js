import React from 'react';
import { mergeDeep } from 'immutable';
import { DatePicker } from '@atlaskit/datetime-picker';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  selectProps: { styles: selectStyles },
  // @atlaskit/datetime-picker uses date-fns format tokens
  // locale defaults to 'en-US'
  placeholder: 'MM/DD/YYYY',
};

const LatticeDatePicker = (props) => {
  const mergedProps = mergeDeep(defaultProps, props);
  /* eslint-disable react/jsx-props-no-spreading */
  return <DatePicker {...mergedProps} />;
  /* eslint-enable */
};

export default LatticeDatePicker;
