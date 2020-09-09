// @flow
import React, { useImperativeHandle, useRef, useState } from 'react';

import clsx from 'clsx';
import styled from 'styled-components';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItemSecondaryAction, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { MenuItemProps as MuiMenuItemProps } from '@material-ui/core';

import { NEUTRAL } from '../../../colors';
import { ARROW_LEFT, ARROW_RIGHT, ESC } from '../../../utils/keycodes';

const ChevronRight = () => <FontAwesomeIcon icon={faChevronRight} color={NEUTRAL.N500} />;
const NestedMenuItemWrapper = styled.div`
  :focus {
    outline: none;
  }
`;

// open NestedMenuItem maintains themed hover style
const useMenuItemStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: props.open ? theme.palette.action.hover : 'transparent'
  })
}));

/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
type Props = typeof MenuItem;

const NestedMenuItem = React.forwardRef<MuiMenuItemProps, MenuItem>((props :Props, ref) => {
  const {
    parentMenuOpen,
    label,
    rightIcon = <ChevronRight />,
    children,
    className,
    tabIndex: tabIndexProp,
    ContainerProps: ContainerPropsProp = {},
    ...MenuItemProps
  } = props;

  const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;

  const menuItemRef = useRef(null);
  useImperativeHandle(ref, () => menuItemRef.current);

  const containerRef = useRef(null);
  useImperativeHandle(containerRefProp, () => containerRef.current);

  const menuContainerRef = useRef(null);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = (event) => {
    setIsSubMenuOpen(true);

    if (ContainerProps?.onMouseEnter) {
      ContainerProps.onMouseEnter(event);
    }
  };
  const handleMouseLeave = (event) => {
    setIsSubMenuOpen(false);

    if (ContainerProps?.onMouseLeave) {
      ContainerProps.onMouseLeave(event);
    }
  };

  // Check if any immediate children are active
  const isSubmenuFocused = () => {
    const active = containerRef.current?.ownerDocument?.activeElement;
    const nestedChildren = menuContainerRef.current?.children ?? [];
    for (let i = 0; i < nestedChildren.length; i += 1) {
      if (nestedChildren[i] === active) {
        return true;
      }
    }
    return false;
  };

  const handleFocus = (event) => {
    if (event.target === containerRef.current) {
      setIsSubMenuOpen(true);
    }

    if (ContainerProps?.onFocus) {
      ContainerProps.onFocus(event);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === ESC) {
      return;
    }

    if (isSubmenuFocused()) {
      event.stopPropagation();
    }

    const active = containerRef.current?.ownerDocument?.activeElement;

    if (event.key === ARROW_LEFT && isSubmenuFocused()) {
      containerRef.current?.focus();
    }

    if (
      event.key === ARROW_RIGHT
      && event.target === containerRef.current
      && event.target === active
    ) {
      const firstChild = menuContainerRef.current?.children[0];
      firstChild?.focus();
    }
  };

  const open = isSubMenuOpen && parentMenuOpen;
  const menuItemClasses = useMenuItemStyles({ open });

  // Root element must have a `tabIndex` attribute for keyboard navigation
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <NestedMenuItemWrapper
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
        role="menu"
        tabIndex={tabIndex}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...ContainerProps}>
      <MenuItem
          className={clsx(menuItemClasses.root, className)}
          ref={menuItemRef}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...MenuItemProps}>
        {label}
        <ListItemSecondaryAction>{rightIcon}</ListItemSecondaryAction>
      </MenuItem>
      <Menu
        // Set pointer events to 'none' to prevent the invisible Popover div
        // from capturing events for clicks and hovers
          style={{ pointerEvents: 'none' }}
          anchorEl={menuItemRef.current}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={open}
          autoFocus={false}
          disableAutoFocus
          disableEnforceFocus
          onClose={() => {
            setIsSubMenuOpen(false);
          }}>
        <div ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
          {children}
        </div>
      </Menu>
    </NestedMenuItemWrapper>
  );
});

export default NestedMenuItem;
