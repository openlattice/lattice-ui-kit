import React from 'react';

import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuItem } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import NestedMenuItem from '../src/components/NestedMenuItem';
import { Button, IconButton } from '../../button';
import { Card, CardSegment, CardStack } from '../../layout';

const options = ['Edit Profile', 'Create Issue'];

const MoreVertIcon = () => <FontAwesomeIcon icon={faEllipsisV} fixedWidth />;

storiesOf('Menu', module)
  .addDecorator((Story) => (
    <div>
      <h1>
        Menu
      </h1>
      <CardStack>
        <Card>
          <CardSegment vertical padding="sm">
            <a href="https://material-ui.com/components/menus/">https://material-ui.com/components/menus/</a>
            <p>
              <code> &lt;Menu /&gt; </code>
              ,
              <code> &lt;MenuItem /&gt; </code>
              , and
              <code> &lt;MenuList /&gt; </code>
              are forwarded from Material-Ui. Use
              <code> &lt;NestedMenuItem /&gt; </code>
              as a drop-in replacement for
              <code> &lt;MenuItem /&gt; </code>
              when you need to add cascading menu elements as children to this component.
            </p>
          </CardSegment>
        </Card>
        <Story />
      </CardStack>
    </div>
  ))
  .add('Nested Menu', () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    return (
      <div>
        <Button variant="contained">
          Create Report
        </Button>
        <IconButton
            variant="text"
            aria-controls={open ? 'button-action-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select additional action"
            aria-haspopup="menu"
            onClick={handleToggle}
            ref={anchorRef}>
          <MoreVertIcon />
        </IconButton>
        <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transition>
          {options.map((option) => (
            <MenuItem
                key={option}
                onClick={action('Click MenuItem')}>
              {option}
            </MenuItem>
          ))}
          <NestedMenuItem label="Visibility" parentMenuOpen={!!open}>
            <MenuItem onClick={action('Click nested MenuItem')}>Auto</MenuItem>
            <MenuItem onClick={action('Click nested MenuItem')}>Always</MenuItem>
            <MenuItem onClick={action('Click nested MenuItem')}>Never</MenuItem>
          </NestedMenuItem>
        </Menu>
      </div>
    );
  });
