import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNarwhal } from '@fortawesome/pro-regular-svg-icons';

import Button from '../../button';
import Banner from '..';

const CITIZENS_OF_DALARAN = `
  CITIZENS OF DALARAN! RAISE YOUR EYES TO THE SKIES AND OBSERVE!
  TODAY OUR WORLD'S DESTRUCTION HAS BEEN AVERTED IN DEFIANCE OF OUR VERY MAKERS!
  ALGALON THE OBSERVER, HERALD OF THE TITANS, HAS BEEN DEFEATED BY OUR BRAVE COMRADES
  IN THE DEPTHS OF THE TITAN CITY OF ULDUAR. ALGALON WAS SENT HERE TO JUDGE THE FATE OF OUR WORLD.
  HE FOUND A PLANET WHOSE RACES HAD DEVIATED FROM THE TITANS' BLUEPRINTS.
  A PLANET WHERE NOT EVERYTHING HAD GONE ACCORDING TO PLAN. COLD LOGIC DEEMED OUR WORLD NOT WORTH SAVING.
  COLD LOGIC, HOWEVER, DOES NOT ACCOUNT FOR THE POWER OF FREE WILL.
  IT'S UP TO EACH OF US TO PROVE THIS IS A WORLD WORTH SAVING.
  THAT OUR LIVES... OUR LIVES ARE WORTH LIVING.
`;

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
        <Banner isOpen={open} mode="default">
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
        <Banner isOpen mode="default" sticky>This is a sticky banner. Scroll down to observe</Banner>
        <Filler>
          { CITIZENS_OF_DALARAN }
        </Filler>
      </Container>
    </>
  ))
  .add('Custom controlled', () => (
    <>
      <BannerController />
      { CITIZENS_OF_DALARAN }
    </>
  ));
