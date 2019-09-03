import styled from 'styled-components';

import { duration } from '../../../../style/transitions';
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

import {
  negativeActive,
  negativeDisabled,
  negativeFocus,
  negativeHover,
  negativeStyle,
} from './NegativeButtonStyles';

const baseButtonVariation = getStyleVariation('mode', {
  default: defaultStyle,
  primary: primaryStyle,
  secondary: secondaryStyle,
  subtle: subtleStyle,
  positive: positiveStyle,
  negative: negativeStyle,
});

const hoverVariation = getStyleVariation('mode', {
  default: defaultHover,
  primary: primaryHover,
  secondary: secondaryHover,
  subtle: subtleHover,
  positive: positiveHover,
  negative: negativeHover,
});

const activeVariation = getStyleVariation('mode', {
  default: defaultActive,
  primary: primaryActive,
  secondary: secondaryActive,
  subtle: subtleActive,
  positive: positiveActive,
  negative: negativeActive,
});

const disabledVariation = getStyleVariation('mode', {
  default: defaultDisabled,
  primary: primaryDisabled,
  secondary: secondaryDisabled,
  subtle: subtleDisabled,
  positive: positiveDisabled,
  negative: negativeDisabled,
});

const focusVariation = getStyleVariation('mode', {
  default: defaultFocus,
  primary: primaryFocus,
  secondary: secondaryFocus,
  subtle: subtleFocus,
  positive: positiveFocus,
  negative: negativeFocus,
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
  transition: background-color ${duration.swift} ease-in-out,
    border-color ${duration.swift} ease-in-out,
    box-shadow ${duration.swift} ease-in-out;
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
