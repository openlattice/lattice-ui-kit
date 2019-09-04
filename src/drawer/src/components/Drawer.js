// @flow

import React from 'react';
import Overlay from '../../../overlay';
import DrawerCard from './styled/DrawerCard';

type Props = {
  children ? :Node;
  isOpen ? :boolean;
  onClose ? :() => void;
  shouldCloseOnOutsideClick ? :boolean;
  side ? :'left' | 'right';
}

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/drawer
 * https://evergreen.surge.sh/components/side-sheet
 */
const Drawer = (props :Props) => {
  const {
    children,
    isOpen,
    onClose,
    shouldCloseOnOutsideClick,
    side,
  } = props;

  return (
    <Overlay
        onClose={onClose}
        isVisible={isOpen}
        isScrollable={false}
        shouldCloseOnClick={shouldCloseOnOutsideClick}>
      <DrawerCard side={side}>
        {children}
      </DrawerCard>
    </Overlay>
  );
};

Drawer.defaultProps = {
  children: undefined,
  isOpen: false,
  onClose: undefined,
  shouldCloseOnOutsideClick: true,
  side: 'left'
};

export default Drawer;
