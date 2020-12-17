import React from 'react';

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

export default {
  title: 'Modal',

  decorators: [
    (Story) => (
      <Card>
        <CardSegment>
          <Story />
        </CardSegment>
      </Card>
    ),
  ],
};

export const Basic = () => {
  const [isVisible, show, hide] = useBoolean();
  return (
    <>
      <Modal
          isVisible={isVisible}
          onClose={hide}
          textPrimary="Confirm"
          textSecondary="Cancel"
          textTitle="Metallica, Master of Puppets - March 3, 1986">
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

Basic.story = {
  name: 'basic',
};

export const ViewportScrolling = () => {
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
};

ViewportScrolling.story = {
  name: 'viewportScrolling',
};

export const Nested = () => {
  const [isVisible, show, hide] = useBoolean();
  return (
    <>
      <TheNextLevel isVisible={isVisible} onClose={hide} />
      <Button onClick={show}>Dream</Button>
    </>
  );
};

export const StretchyButtons = () => {
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
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

StretchyButtons.story = {
  name: 'stretchy buttons',
};

export const StretchyPrimaryButton = () => {
  const [isVisible, show, hide] = useBoolean();
  return (
    <>
      <Modal
          isVisible={isVisible}
          onClose={hide}
          shouldStretchButtons
          textPrimary="Confirm"
          textTitle="Metallica, Master of Puppets - March 3, 1986">
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

StretchyPrimaryButton.story = {
  name: 'stretchy primary button',
};

export const StretchySecondaryButton = () => {
  const [isVisible, show, hide] = useBoolean();
  return (
    <>
      <Modal
          isVisible={isVisible}
          onClose={hide}
          shouldStretchButtons
          textSecondary="Cancel"
          textTitle="Metallica, Master of Puppets - March 3, 1986">
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

StretchySecondaryButton.story = {
  name: 'stretchy secondary button',
};

export const AlignTop = () => {
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
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

AlignTop.story = {
  name: 'align top',
};

export const OutsideClickDoesNotCloseModal = () => {
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
        <p>March 3, 1986</p>
        <a href="https://openlattice.com">https://openlattice.com</a>
      </Modal>
      <Button onClick={show}>Show Modal</Button>
    </>
  );
};

OutsideClickDoesNotCloseModal.story = {
  name: 'outside click does not close modal',
};
