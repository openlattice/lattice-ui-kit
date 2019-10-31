import { Component } from 'react';

import { RequestStates } from 'redux-reqseq';

class DeleteModalExample extends Component {

  state = {
    deleteConfirmationText: '',
    isValidConfirmation: true,
    isVisible: false,
    requestState: RequestStates.STANDBY,
    shouldSucceed: true,
  }

  closeModal = () => {
    this.setState({
      deleteConfirmationText: '',
      isVisible: false,
      requestState: RequestStates.STANDBY,
    });
  }

  openModal = (shouldSucceed) => {

    this.setState({
      shouldSucceed,
      isVisible: true,
    });
  }

  deleteThing = () => {

    const { deleteConfirmationText, shouldSucceed } = this.state;
    if (deleteConfirmationText !== 'OpenLattice') {
      this.setState({ isValidConfirmation: false });
      return;
    }

    this.setState({ requestState: RequestStates.PENDING });
    setTimeout(() => {
      this.setState({
        requestState: shouldSucceed ? RequestStates.SUCCESS : RequestStates.FAILURE,
      });
    }, 1000);
  }

  handleOnChangeDeleteConfirmation = (event) => {

    this.setState({
      deleteConfirmationText: event.target.value || '',
      isValidConfirmation: true,
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const {
      isValidConfirmation,
      isVisible,
      requestState,
    } = this.state;
    return children({
      isValidConfirmation,
      isVisible,
      requestState,
      closeModal: this.closeModal,
      deleteThing: this.deleteThing,
      handleOnChangeDeleteConfirmation: this.handleOnChangeDeleteConfirmation,
      openModal: this.openModal,
    });
  }
}

export default DeleteModalExample;
