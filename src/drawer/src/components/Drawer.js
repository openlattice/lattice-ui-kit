// @flow

import React from 'react';
import Overlay from '../../../overlay';
import { DrawerWrapper } from './styled';

type Props = {
  isOpen :boolean;
  side :string;
  onClose :() => void;
  children :Node;
}

const Drawer = (props :Props) => {
  const {
    children,
    isOpen,
    onClose,
    side,
  } = props;

  return (
    <Overlay
        onClose={onClose}
        isVisible={isOpen}
        isScrollable={false}
        shouldCloseOnClick>
      <DrawerWrapper side={side}>
        {children}
      </DrawerWrapper>
    </Overlay>
  );
};

export default Drawer;
