import React, { Component } from 'react';

import { Button } from '../../button';
import Overlay from '..';

class OverlayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  hide = () => {
    this.setState({ isVisible: false });
  };

  show = () => {
    this.setState({ isVisible: true });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { isVisible } = this.state;
    return (
      <>
        <Overlay isVisible={isVisible}>{children}</Overlay>
        <Button onClick={this.show}>Show Overlay</Button>
      </>
    );
  }
}

export default {
  title: 'Overlay',
};

export const Basic = () => <OverlayExample />;

Basic.story = {
  name: 'basic',
};

export const Children = () => (
  <OverlayExample>
    <h1>Hello World</h1>
    <button type="button">testing</button>
  </OverlayExample>
);

Children.story = {
  name: 'children',
};
