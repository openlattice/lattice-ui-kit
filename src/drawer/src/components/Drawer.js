// @flow

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import type { Element } from 'react';

import Portal from '../../../portal';
import Overlay from '../../../overlay';
import DrawerCard from './styled/DrawerCard';

type Props = {
  children :Element<any>;
  isOpen :boolean;
  onClose :() => void;
  shouldCloseOnOutsideClick :boolean;
  shouldCloseOnEscape :boolean;
  side :'left' | 'right';
  transparentOverlay :boolean;
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
    shouldCloseOnEscape,
    shouldCloseOnOutsideClick,
    side,
    transparentOverlay,
  } = props;

  return (
    <>
      <Overlay
          onClose={onClose}
          isVisible={isOpen}
          isScrollable
          shouldCloseOnClick={shouldCloseOnOutsideClick}
          transparent={transparentOverlay} />
      <Portal>
        <CSSTransition
            in={isOpen}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames="slide">
          <DrawerCard
              onClose={onClose}
              shouldCloseOnEscape={shouldCloseOnEscape}
              side={side}>
            {children}
          </DrawerCard>
        </CSSTransition>
      </Portal>
    </>
  );
};

Drawer.defaultProps = {
  children: undefined,
  isOpen: false,
  onClose: undefined,
  shouldCloseOnEscape: true,
  shouldCloseOnOutsideClick: true,
  side: 'left',
  transparentOverlay: false,
};

export default Drawer;
