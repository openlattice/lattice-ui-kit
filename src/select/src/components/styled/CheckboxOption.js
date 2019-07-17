// @flow
import React from 'react';

import type { Ref } from 'react';

import { Checkbox } from '../../../../choices';
import { NEUTRALS } from '../../../../colors';

type OptionProps = {
  getStyles :Object;
  innerProps :Object;
  innerRef :Ref<any>;
  isFocused :boolean;
  isSelected :boolean;
  label :string;
}

const Option = (props :OptionProps) => {
  const {
    getStyles,
    innerProps,
    innerRef,
    isFocused,
    isSelected,
    label,
  } = props;

  const style = {
    ...getStyles('option', props),
    display: 'flex',
    flex: '1 1 auto',
    padding: '0 10px',
    backgroundColor: isFocused ? NEUTRALS[6] : 'white',
    width: '100%'
  };

  return (
    <div ref={innerRef} {...innerProps} style={style}>
      <Checkbox checked={isSelected} label={label} readOnly />
    </div>
  );
};

export default Option;
