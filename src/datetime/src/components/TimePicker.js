import React from 'react';
import { mergeDeep } from 'immutable';
import { TimePicker } from '@atlaskit/datetime-picker';
import selectStyles from '../../../style/selectStyles';
import times from '../../constants';

export const defaultProps = {
  selectProps: { styles: selectStyles },
  timeIsEditable: true,
  times,
};

const LatticeTimePicker = (props) => {
  const mergedProps = mergeDeep(defaultProps, props);
  /* eslint-disable react/jsx-props-no-spreading */
  return <TimePicker {...mergedProps} />;
  /* eslint-enable */
};

export default LatticeTimePicker;
