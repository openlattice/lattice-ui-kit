import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Banner from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNarwhal } from '@fortawesome/pro-regular-svg-icons';

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  font-size: 24px;
  min-width: 0;
  justify-content: space-evenly;
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
  .add('default', () => (
    <>
      <Banner isOpen mode="default">This is a banner</Banner>
      <Banner isOpen mode="danger">This is an error</Banner>
      <Banner isOpen mode="warning">This is a warning</Banner>
      <Banner isOpen mode="success">This is a success</Banner>
      <Banner isOpen icon={<FontAwesomeIcon icon={faNarwhal} />}>This is a custom icon</Banner>
    </>
  ))
  .add('Custom controlled', () => (
    <>
      <BannerController />
      <div>I get pushed</div>
    </>
  ));
