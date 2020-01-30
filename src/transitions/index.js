// @flow
import { css } from 'styled-components';

import { duration } from '../style/transitions';

const fadeTransitionStyles = css`
  &.luk-fade-appear {
    opacity: 0;
  };

  &.luk-fade-appear-active {
    opacity: 1;
    transition: opacity ${duration.standard} ease-out;
  };

  &.luk-fade-enter {
    opacity: 0;
  };

  &.luk-fade-enter-active {
    opacity: 1;
    transition: opacity ${duration.standard} ease-out;
  };

  &.luk-fade-exit {
    opacity: 1;
  };

  &.luk-fade-exit-active {
    opacity: 0;
    transition: opacity ${duration.standard} ease-out;
  };
`;

type Props = { side :'left' | 'right' };

const setTransform = (props :Props) => {
  const { side } = props;
  if (side === 'left') {
    return css`--transform: translate(-100%);`;
  }

  return css`--transform: translate(100%);`;
};

const slideTransitionStyles = css`
  ${setTransform};
  &.luk-slide-appear {
    transform: var(--transform);
  };

  &.luk-slide-appear-active {
    transform: translate(0);
    transition: transform ${duration.enter} ease-out;
  };

  &.luk-slide-enter {
    transform: var(--transform);
  };

  &.luk-slide-enter-active {
    transform: translate(0);
    transition: transform ${duration.enter} ease-out;
  };

  &.luk-slide-exit {
    transform: translate(0);
  };

  &.luk-slide-exit-active {
    transform: var(--transform);
    transition: transform ${duration.exit} ease-out;
  }
`;

export {
  fadeTransitionStyles, // eslint-disable-line import/prefer-default-export
  slideTransitionStyles,
};
