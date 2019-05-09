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
  .add('Basic Modal', () => (
    <Fragment>
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
              <Button onClick={show}>
                Show Modal
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
      <br />
      <br />
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
              <Button onClick={show}>
                Show Modal - stretchy primary button
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
      <br />
      <br />
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
              <Button onClick={show}>
                Show Modal - stretchy secondary button
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
      <br />
      <br />
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
              <Button onClick={show}>
                Show Modal - 2 stretchy buttons
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
      <br />
      <br />
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
              <Button onClick={show}>
                Show Modal - align top
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
      <br />
      <br />
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
              <Button onClick={show}>
                Show Modal - don&apos;t hide on outside click
              </Button>
            </Fragment>
          )
        }
      </ModalExample>
    </Fragment>
  ));
