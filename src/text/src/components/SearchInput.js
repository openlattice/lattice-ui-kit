/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import inputStyles from './styled/inputStyles';
import { NEUTRALS } from '../../../colors';

const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  ${inputStyles}
  color: ${NEUTRALS[0]};
  padding-left: 32px;

  &::placeholder {
    color: ${NEUTRALS[1]};
  }
`;

const SearchIcon = styled.div`
  align-self: center;
  color: ${NEUTRALS[1]};
  margin-left: 11px;
  font-size: 14px;
  line-height: 14px;
  position: absolute;
`;

type Props = {
  disabled ?:boolean;
  id ?:string;
  name ?:string;
  onBlur ?:(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  onChange ?:(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ?:(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  placeholder ?:string;
  readOnly ?:boolean;
  value ?:any;
};

const SearchInput = (props :Props) => (
  <SearchInputWrapper>
    <SearchIcon>
      <FontAwesomeIcon icon={faSearch} />
    </SearchIcon>
    <Input {...props} type="search" />
  </SearchInputWrapper>
);

SearchInput.defaultProps = {
  disabled: false,
  id: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: 'Search...',
  readOnly: undefined,
  value: undefined,
};

export default SearchInput;
