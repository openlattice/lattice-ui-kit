import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Banner from '..';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap;
  font-size: 24px;
  min-width: 0;
`;

const Name = styled.strong`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Birthdate = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

class BannerController extends Component {
  state = {
    open: false
  };

  handleOpenToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleOpenToggle}>Toggle</button>
        <Banner isOpen={open}>
          <StyledDiv>
            <Name>WERBENJAGERMANJENSEN, SMITTY</Name>
            <Birthdate>DOB: 07-14-1980</Birthdate>
          </StyledDiv>
        </Banner>
      </>
    );
  }
}

storiesOf('Banner', module)
  .add('Default', () => (
    <BannerController />
  ));
