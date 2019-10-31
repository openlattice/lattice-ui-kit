import { Component } from 'react';

import { RequestStates } from 'redux-reqseq';

class ActionModalExample extends Component {

  state = {
    isVisible: false,
    requestState: RequestStates.STANDBY,
  }

  closeModal = () => {
    this.setState({ isVisible: false, requestState: RequestStates.STANDBY });
  }

  openModal = () => {
    this.setState({ isVisible: true });
  }

  onClickPrimary = () => {

    this.setState({ requestState: RequestStates.PENDING });
    setTimeout(() => {
      this.setState({ requestState: RequestStates.SUCCESS });
    }, 1000);
  }

  onClickSecondary = () => {

    this.setState({ requestState: RequestStates.PENDING });
    setTimeout(() => {
      this.setState({ requestState: RequestStates.FAILURE });
    }, 1000);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { isVisible, requestState } = this.state;
    return children({
      isVisible,
      requestState,
      closeModal: this.closeModal,
      onClickPrimary: this.onClickPrimary,
      onClickSecondary: this.onClickSecondary,
      openModal: this.openModal,
    });
  }
}

export default ActionModalExample;
