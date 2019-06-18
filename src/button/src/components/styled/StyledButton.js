import styled from 'styled-components';
import { getStyleVariation } from '../../../../utils/StyleUtils';

import {
  defaultActive,
  defaultDisabled,
  defaultFocus,
  defaultHover,
  defaultStyle,
} from './DefaultButton';

import {
  secondaryActive,
  secondaryDisabled,
  secondaryFocus,
  secondaryHover,
  secondaryStyle,
} from './SecondaryButton';

import {
  primaryActive,
  primaryDisabled,
  primaryFocus,
  primaryHover,
  primaryStyle,
} from './PrimaryButton';

import {
  subtleActive,
  subtleDisabled,
  subtleFocus,
  subtleHover,
  subtleStyle,
} from './SubtleButton';

const baseButtonVariation = getStyleVariation('mode', {
  default: defaultStyle,
  primary: primaryStyle,
  secondary: secondaryStyle,
  subtle: subtleStyle,
});

const hoverVariation = getStyleVariation('mode', {
  default: defaultHover,
  primary: primaryHover,
  secondary: secondaryHover,
  subtle: subtleHover,
});

const activeVariation = getStyleVariation('mode', {
  default: defaultActive,
  primary: primaryActive,
  secondary: secondaryActive,
  subtle: subtleActive,
});

const disabledVariation = getStyleVariation('mode', {
  default: defaultDisabled,
  primary: primaryDisabled,
  secondary: secondaryDisabled,
  subtle: subtleDisabled,
});

const focusVariation = getStyleVariation('mode', {
  default: defaultFocus,
  primary: primaryFocus,
  secondary: secondaryFocus,
  subtle: subtleFocus,
});

const StyledButton = styled.button`
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  white-space: nowrap;
  ${baseButtonVariation};

  :hover {
    cursor: pointer;
    text-decoration: none;
    ${hoverVariation}
  };

  :active {
    text-decoration: none;
    ${activeVariation}
  };

  :disabled {
    cursor: not-allowed;
    text-decoration: none;
    ${disabledVariation}
  };

  :focus-visible {
    ${focusVariation}
  }
`;

export default StyledButton;
