/*
 * @flow
 */

import React from 'react';

import type { Ref } from 'react';

import { Checkbox } from '../../../../choices';
import { NEUTRALS } from '../../../../colors';

type OptionProps = {
  getStyles :Object;
  innerProps :Object;
  innerRef :Ref<any>;
  isDisabled :boolean;
  isFocused :boolean;
  isSelected :boolean;
  label :string;
}

const Option = (props :OptionProps) => {
  const {
    getStyles,
    innerProps,
    innerRef,
    isDisabled,
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

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div ref={innerRef} {...innerProps} style={style}>
      <Checkbox checked={isSelected} label={label} disabled={isDisabled} readOnly />
    </div>
  );
  /* eslint-enable */
};

export default Option;
