// @flow
import type { ElementConfig } from 'react';

import styled from 'styled-components';
import { components } from 'react-select';

import { NEUTRAL } from '../../../../colors';

const IconWrapper = styled.span`
  position: absolute;
  left: 12px;
  color: ${NEUTRAL.N500};
`;

type Props = ElementConfig<typeof components.ValueContainer>;

const ValueContainer = ({ children, selectProps, ...props } :Props) => {
  const { inputIcon } = selectProps;
  return (
    components.ValueContainer && (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <components.ValueContainer selectProps={selectProps} {...props}>
        {
          inputIcon && (
            <IconWrapper>
              {inputIcon}
            </IconWrapper>
          )
        }
        {children}
      </components.ValueContainer>
    )
  );
};

ValueContainer.defaultProps = {
  inputIcon: null
};

export default ValueContainer;
