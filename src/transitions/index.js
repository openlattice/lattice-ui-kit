import { css } from 'styled-components';

const fadeTransitionStyles = css`
  &.fade-appear {
    opacity: 0;
  }
  &.fade-appear-done {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-done {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-done {
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }
`;

export {
  fadeTransitionStyles // eslint-disable-line import/prefer-default-export
};
