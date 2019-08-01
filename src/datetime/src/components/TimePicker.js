import React from 'react';
import { mergeDeep } from 'immutable';
import { TimePicker } from '@atlaskit/datetime-picker';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  selectProps: { styles: selectStyles },
  timeIsEditable: true
};

const LatticeTimePicker = (props) => {
  const mergedProps = mergeDeep(defaultProps, props);
  return <TimePicker {...mergedProps} />;
};

export default LatticeTimePicker;
