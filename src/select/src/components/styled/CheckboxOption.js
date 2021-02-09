/*
 * @flow
 */

import type { Ref } from 'react';

import SelectOption from '../SelectOption';
import { Checkbox } from '../../../../choices';

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
    isDisabled,
    isSelected,
    label,
  } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <SelectOption {...props} isCheckBoxOption>
      <Checkbox checked={isSelected} label={label} disabled={isDisabled} readOnly />
    </SelectOption>
  );
  /* eslint-enable */
};

export default Option;
