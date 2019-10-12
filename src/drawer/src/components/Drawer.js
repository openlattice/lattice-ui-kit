// @flow

import React from 'react';
import type { Element } from 'react';

import Overlay from '../../../overlay';
import DrawerCard from './styled/DrawerCard';

type Props = {
  children ? :Node | Element<any>;
  isOpen ? :boolean;
  onClose ? :() => void;
  shouldCloseOnOutsideClick ? :boolean;
  side ? :'left' | 'right';
  transparentOverlay ? :boolean;
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
    transparentOverlay,
  } = props;

  return (
    <Overlay
        onClose={onClose}
        isVisible={isOpen}
        isScrollable
        shouldCloseOnClick={shouldCloseOnOutsideClick}
        transparent={transparentOverlay}>
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
  side: 'left',
  transparentOverlay: false,
};

export default Drawer;
