import React, { Component, Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../button';
import Overlay from '..';

class OverlayExample extends Component {

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
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { isVisible } = this.state;
    return (
      <Fragment>
        <Overlay isVisible={isVisible}>
          { children }
        </Overlay>
        <Button onClick={this.show}>Show Overlay</Button>
      </Fragment>
    );
  }
}

storiesOf('Overlay', module)
  .add('basic', () => (
    <OverlayExample />
  ))
  .add('children', () => (
    <OverlayExample>
      <h1>Hello World</h1>
      <button type="button">testing</button>
    </OverlayExample>
  ));
