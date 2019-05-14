import React from 'react';
import Select from 'react-select';

import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';
import Checkbox from '../../../checkbox';
import { NEUTRALS } from '../../../colors';

const Option = (props) => {
  const {
    innerProps,
    innerRef,
    isFocused,
    isSelected,
    label,
  } = props;

  const style = {
    padding: '0 10px',
    backgroundColor: isFocused ? NEUTRALS[6] : 'white'
  };

  return (
    <div ref={innerRef} {...innerProps} style={style}>
      <Checkbox checked={isSelected} label={label} readOnly />
    </div>
  );
};

export const props = {
  styles: selectStyles,
  menuPlacement: 'auto',
  components: {
    Option
  },
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
};

export default withProps(Select, props);
