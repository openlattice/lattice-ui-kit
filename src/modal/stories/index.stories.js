import React, { Component, Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../button';
import Modal from '..';

class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  hide = () => {
    this.setState({ isVisible: false });
  }

  show = () => {
    this.setState({ isVisible: true });
  }

  render() {
    const { children } = this.props;
    const { isVisible } = this.state;
    return children({
      isVisible,
      hide: this.hide,
      show: this.show,
    });
  }
}

storiesOf('Modal', module)
  .add('basic', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ))
  .add('stretchy buttons', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ))
  .add('stretchy primary button', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ))
  .add('stretchy secondary button', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ))
  .add('align top', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ))
  .add('outside click does not close modal', () => (
    <ModalExample>
      {
        ({ hide, isVisible, show }) => (
          <Fragment>
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
          </Fragment>
        )
      }
    </ModalExample>
  ));
