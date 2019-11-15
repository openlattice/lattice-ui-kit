import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../../button';
import { Card, CardSegment } from '../../layout';
import { useBoolean } from '../../hooks';
import { Modal } from '..';

const TheNextLevel = ({ isVisible, onClose }) => {
  const [showNext, goDeeper, kicker] = useBoolean();
  return (
    <Modal
        isVisible={isVisible}
        onClose={onClose}
        onClickPrimary={goDeeper}
        textPrimary="Go Deeper"
        textSecondary="Kick Out"
        textTitle="Inception">
      Am I in limbo?
      <TheNextLevel isVisible={showNext} onClose={kicker} />
    </Modal>
  );
};

storiesOf('Modal', module)
  .addDecorator((Story) => (
    <Card>
      <CardSegment>
        <Story />
      </CardSegment>
    </Card>
  ))
  .add('basic', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            textPrimary="Confirm"
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('viewportScrolling', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            textPrimary="Confirm"
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986"
            viewportScrolling>
          <div style={{ height: '4096px' }}>I am a tall div</div>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('Nested', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <TheNextLevel isVisible={isVisible} onClose={hide} />
        <Button onClick={show}>Dream</Button>
      </>
    );
  })
  .add('stretchy buttons', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            shouldStretchButtons
            textPrimary="Confirm"
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('stretchy primary button', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            shouldStretchButtons
            textPrimary="Confirm"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('stretchy secondary button', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            shouldStretchButtons
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('align top', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            shouldBeCentered={false}
            textPrimary="Confirm"
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  })
  .add('outside click does not close modal', () => {
    const [isVisible, show, hide] = useBoolean();
    return (
      <>
        <Modal
            isVisible={isVisible}
            onClose={hide}
            shouldBeCentered={false}
            shouldCloseOnOutsideClick={false}
            textPrimary="Confirm"
            textSecondary="Cancel"
            textTitle="Metallica, Master of Puppets - March 3, 1986">
          <p>
            March 3, 1986
          </p>
          <a href="https://openlattice.com">
            https://openlattice.com
          </a>
        </Modal>
        <Button onClick={show}>Show Modal</Button>
      </>
    );
  });
