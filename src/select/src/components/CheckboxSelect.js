import React from 'react';
import Select from 'react-select';

import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';
import Checkbox from '../../../checkbox';
import { PURPLES } from '../../../colors';

const Option = (props) => {
  const {
    getStyles,
    isSelected,
    innerProps,
    innerRef,
    label
  } = props;

  const style = {
    ...getStyles('option', props),
    padding: '0 12px',
    ':active': {
      backgroundColor: PURPLES[5]
    }
  };

  console.log(props);

  return (
    <div ref={innerRef} {...innerProps} style={style}>
      <Checkbox checked={isSelected} label={label} />
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
