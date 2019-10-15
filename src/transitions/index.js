// @flow
import { css } from 'styled-components';
import { duration } from '../style/transitions';

const fadeTransitionStyles = css`
  &.fade-appear {
    opacity: 0;
  };

  &.fade-appear-active {
    opacity: 1;
    transition: opacity ${duration.standard} ease-in-out;
  };

  &.fade-enter {
    opacity: 0;
  };

  &.fade-enter-active {
    opacity: 1;
    transition: opacity ${duration.standard} ease-in-out;
  };

  &.fade-exit {
    opacity: 1;
  };

  &.fade-exit-active {
    opacity: 0;
    transition: opacity ${duration.standard} ease-in-out;
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
  &.slide-appear {
    transform: var(--transform);
  };

  &.slide-appear-active {
    transform: translate(0);
    transition: transform ${duration.standard} ease-in-out;
  };

  &.slide-enter {
    transform: var(--transform);
  };

  &.slide-enter-active {
    transform: translate(0);
    transition: transform ${duration.standard} ease-in-out;
  };

  &.slide-exit {
    transform: translate(0);
  };

  &.slide-exit-active {
    transform: var(--transform);
    transition: transform ${duration.standard} ease-in-out;
  }
`;

export {
  fadeTransitionStyles, // eslint-disable-line import/prefer-default-export
  slideTransitionStyles,
};
