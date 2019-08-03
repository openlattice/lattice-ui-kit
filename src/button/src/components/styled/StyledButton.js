import styled from 'styled-components';
import { getStyleVariation } from '../../../../utils/StyleUtils';

import {
  defaultActive,
  defaultDisabled,
  defaultFocus,
  defaultHover,
  defaultStyle,
} from './DefaultButtonStyles';

import {
  secondaryActive,
  secondaryDisabled,
  secondaryFocus,
  secondaryHover,
  secondaryStyle,
} from './SecondaryButtonStyles';

import {
  primaryActive,
  primaryDisabled,
  primaryFocus,
  primaryHover,
  primaryStyle,
} from './PrimaryButtonStyles';

import {
  subtleActive,
  subtleDisabled,
  subtleFocus,
  subtleHover,
  subtleStyle,
} from './SubtleButtonStyles';

import {
  positiveActive,
  positiveDisabled,
  positiveFocus,
  positiveHover,
  positiveStyle,
} from './PositiveButtonStyles';

const baseButtonVariation = getStyleVariation('mode', {
  default: defaultStyle,
  primary: primaryStyle,
  secondary: secondaryStyle,
  subtle: subtleStyle,
  positive: positiveStyle,
});

const hoverVariation = getStyleVariation('mode', {
  default: defaultHover,
  primary: primaryHover,
  secondary: secondaryHover,
  subtle: subtleHover,
  positive: positiveHover,
});

const activeVariation = getStyleVariation('mode', {
  default: defaultActive,
  primary: primaryActive,
  secondary: secondaryActive,
  subtle: subtleActive,
  positive: positiveActive,
});

const disabledVariation = getStyleVariation('mode', {
  default: defaultDisabled,
  primary: primaryDisabled,
  secondary: secondaryDisabled,
  subtle: subtleDisabled,
  positive: positiveDisabled,
});

const focusVariation = getStyleVariation('mode', {
  default: defaultFocus,
  primary: primaryFocus,
  secondary: secondaryFocus,
  subtle: subtleFocus,
  positive: positiveFocus,
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
