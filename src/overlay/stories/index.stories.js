import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../button';
import Overlay from '../../overlay';

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
    return (
      <Fragment>
        <Overlay isVisible={this.state.isVisible}>
          { this.props.children }
        </Overlay>
        <Button onClick={this.show}>Show Overlay</Button>
      </Fragment>
    );
  }
}

storiesOf('Overlay', module)
  .add('Basic Overlay', () => (
    <OverlayExample />
  ))
  .add('Overlay with children', () => (
    <OverlayExample>
      <h1>Hello World</h1>
      <button>testing</button>
    </OverlayExample>
  ));
