// @flow
import React, { useImperativeHandle, useRef, useState } from 'react';

import clsx from 'clsx';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItemSecondaryAction, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { MenuItemProps as MuiMenuItemProps } from '@material-ui/core';

import { NEUTRAL } from '../../../colors';
import { ARROW_LEFT, ARROW_RIGHT, ESC } from '../../../utils/keycodes';

const ChevronRight = () => <FontAwesomeIcon icon={faChevronRight} color={NEUTRAL.N500} size="sm" />;

// open NestedMenuItem maintains themed hover style
const useMenuItemStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: props.open ? theme.palette.action.hover : 'transparent'
  })
}));

const useNestedMenuItemStyles = makeStyles((theme) => ({
  root: {
    '&:focus': {
      outline: 'none',
      backgroundColor: theme.palette.action.selected
    }
  }
}));

/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
type Props = typeof MenuItem;

const NestedMenuItem = React.forwardRef<MuiMenuItemProps, MenuItem>((props :Props, ref) => {
  const {
    ContainerProps: ContainerPropsProp = {},
    children,
    className,
    elevation,
    label,
    parentMenuOpen,
    rightIcon = <ChevronRight />,
    tabIndex: tabIndexProp,
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
  const isSubMenuFocused = () => {
    const active = containerRef.current?.ownerDocument?.activeElement;
    const nestedChildren = menuContainerRef.current?.children ?? [];
    for (let i = 0; i < nestedChildren.length; i += 1) {
      if (nestedChildren[i] === active) {
        return true;
      }
    }
    return false;
  };

  const handleKeyDown = (event) => {
    if (event.key === ESC) {
      setIsSubMenuOpen(false);
      return;
    }

    if (isSubMenuFocused()) {
      event.stopPropagation();
    }

    const active = containerRef.current?.ownerDocument?.activeElement;

    if (event.key === ARROW_LEFT && isSubMenuFocused()) {
      setIsSubMenuOpen(false);
      containerRef.current?.focus();
    }

    if (
      event.key === ARROW_RIGHT
      && event.target === containerRef.current
      && event.target === active
    ) {
      setIsSubMenuOpen(true);
      const firstChild = menuContainerRef.current?.children[0];
      firstChild?.focus();
    }
  };

  const open = !!(isSubMenuOpen && parentMenuOpen);
  const menuItemClasses = useMenuItemStyles({ open });
  const nestedMenuItemClasses = useNestedMenuItemStyles();

  // Root element must have a `tabIndex` attribute for keyboard navigation
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <div
        className={clsx(nestedMenuItemClasses.root)}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...ContainerProps}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
        role="menu"
        tabIndex={tabIndex}>
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
          anchorEl={menuItemRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          autoFocus={false}
          disableAutoFocus
          disableEnforceFocus
          elevation={elevation}
          getContentAnchorEl={null}
          onClose={() => {
            setIsSubMenuOpen(false);
          }}
          onEntering={() => menuContainerRef.current?.children[0]?.focus()}
          open={open}
          style={{ pointerEvents: 'none' }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}>
        <div ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
          {children}
        </div>
      </Menu>
    </div>
  );
});

export default NestedMenuItem;
