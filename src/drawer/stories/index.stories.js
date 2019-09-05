import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Drawer from '../src/components/Drawer';
import MenuList from './components/MenuList';
import { Button } from '../../button';
import {
  Card,
  CardHeader,
  CardSegment
} from '../../layout';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DrawerController = () => {
  const [isLeftOpen, setLeft] = React.useState(false);
  const [isRightOpen, setRight] = React.useState(false);

  return (
    <Card>
      <CardHeader padding="sm" mode="primary">
        <strong>
          Drawer
        </strong>
      </CardHeader>
      <CardSegment vertical padding="sm">
        <ButtonGroup>
          <Button onClick={() => setLeft(true)}>
            Left
          </Button>
          <Button onClick={() => setRight(true)}>
            Right
          </Button>
        </ButtonGroup>
      </CardSegment>
      <Drawer
          side="left"
          isOpen={isLeftOpen}
          onClose={() => setLeft(false)}>
        <MenuList />
      </Drawer>
      <Drawer
          side="right"
          isOpen={isRightOpen}
          onClose={() => setRight(false)}>
        <MenuList />
      </Drawer>
    </Card>
  );
};

storiesOf('Drawer', module)
  .add('default', () => (
    <DrawerController />
  ));
