// @flow

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
      <CSSTransition
          in={isOpen}
          mountOnEnter
          unmountOnExit
          timeout={200}
          classNames="luk-slide">
        <Portal>
          <DrawerCard
              onClose={onClose}
              shouldCloseOnEscape={shouldCloseOnEscape}
              side={side}>
            {children}
          </DrawerCard>
        </Portal>
      </CSSTransition>
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
