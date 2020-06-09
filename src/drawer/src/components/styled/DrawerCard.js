// @flow
import React from 'react';
import type { Element } from 'react';

import styled, { css } from 'styled-components';

import { useKeyDownListener } from '../../../../hooks';
import { slideTransitionStyles } from '../../../../transitions';
import { ESC_KEY_CODE } from '../../../../utils/keycodes';

type Props = {
  children :Element<any>,
  onClose :() => any;
  shouldCloseOnEscape :boolean;
  side :'left' | 'right';
};

const getScreenPosition = (props :Props) => {
  const { side } = props;
  switch (side) {
    case 'right':
      return css`
        right: 0;
      `;

    case 'left':
    default:
      return css`
        left: 0;
      `;
  }
};

const DrawerCardWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  min-width: 300px;
  overflow-y: auto;
  position: fixed;
  top: 0;
  z-index: 1000;

  ${getScreenPosition};
  ${slideTransitionStyles};
`;

const DrawerCard = (props :Props) => {
  const {
    children,
    onClose,
    shouldCloseOnEscape,
    side,
  } = props;

  useKeyDownListener(ESC_KEY_CODE, onClose, shouldCloseOnEscape);

  return (
    <DrawerCardWrapper side={side}>
      { children }
    </DrawerCardWrapper>
  );
};

export default DrawerCard;
