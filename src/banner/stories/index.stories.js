import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { LoremIpsum } from 'lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNarwhal } from '@fortawesome/pro-regular-svg-icons';

import Banner from '..';
import Button from '../../button';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

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

const Container = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

const Filler = styled.div`
  height: 400;
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
        <Button type="button" mode="primary" onClick={this.handleOpenToggle}>Toggle</Button>
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
      <Banner isOpen icon={() => <FontAwesomeIcon icon={faNarwhal} fixedWidth />}>This is a custom icon</Banner>
      <br />
      <Container>
        <Banner isOpen sticky>This is a sticky banner. Scroll down to observe</Banner>
        <Filler>
          { lorem.generateParagraphs(4) }
        </Filler>
      </Container>
    </>
  ))
  .add('Custom controlled', () => (
    <>
      <BannerController />
      { lorem.generateParagraphs(4) }
    </>
  ));
