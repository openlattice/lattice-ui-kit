import React from 'react';

import styled from 'styled-components';
import { faMapMarkerPlus, faSpaceShuttle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { storiesOf } from '@storybook/react';

import { useBoolean } from '../../hooks';
import { Card, CardSegment } from '../../layout';
import {
  Button,
} from '..';

const ButtonRow = styled.div`
  margin: 5px 0;
  && > * {
    margin: 0 5px;
  }
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, indigo 30%, magenta 90%);
  color: powderblue;
  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }
`;

const LaunchIcon = <FontAwesomeIcon icon={faSpaceShuttle} />;
const NewLocationIcon = <FontAwesomeIcon icon={faMapMarkerPlus} fixedWidth />;

storiesOf('Button', module)
  .add('Buttons', () => (
    <Card>
      <CardSegment vertical>
        <H2>Contained (default)</H2>
        <ButtonRow>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="error">Error</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
          <Button isLoading>isLoading</Button>
          <Button disabled>Disabled</Button>
          <Button href="/?path=/story/button--buttons">href</Button>
        </ButtonRow>
        <ButtonRow style={{ color: 'orchid' }}>
          <Button color="inherit">Inherit: orchid</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Outlined</H2>
        <ButtonRow>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="success">Success</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="warning">Warning</Button>
          <Button variant="outlined" color="info">Info</Button>
          <Button variant="outlined" isLoading>isLoading</Button>
          <Button variant="outlined" disabled>Disabled</Button>
          <Button variant="outlined" href="/?path=/story/button--buttons">href</Button>
        </ButtonRow>
        <ButtonRow style={{ color: 'orchid' }}>
          <Button variant="outlined" color="inherit">Inherit: orchid</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Text</H2>
        <ButtonRow>
          <Button variant="text">Default</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="success">Success</Button>
          <Button variant="text" color="error">Error</Button>
          <Button variant="text" color="warning">Warning</Button>
          <Button variant="text" color="info">Info</Button>
          <Button variant="text" isLoading>isLoading</Button>
          <Button variant="text" disabled>Disabled</Button>
          <Button variant="text" href="/?path=/story/button--buttons">href</Button>
        </ButtonRow>
        <ButtonRow style={{ color: 'orchid' }}>
          <Button variant="text" color="inherit">Inherit: orchid</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Size</H2>
        <ButtonRow>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </ButtonRow>
        <ButtonRow>
          <Button variant="outlined" color="primary" size="small">Small</Button>
          <Button variant="outlined" size="medium">Medium</Button>
          <Button variant="outlined" size="large">Large</Button>
        </ButtonRow>
        <ButtonRow>
          <Button variant="text" size="small">Small</Button>
          <Button variant="text" size="medium">Medium</Button>
          <Button variant="text" size="large">Large</Button>
        </ButtonRow>
        <ButtonRow>
          <Button isLoading size="small">Small</Button>
          <Button isLoading size="medium">Medium</Button>
          <Button isLoading size="large">Large</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Styled</H2>
        <ButtonRow>
          <StyledButton size="small">Styled</StyledButton>
          <StyledButton>Styled</StyledButton>
          <StyledButton size="large">Styled</StyledButton>
        </ButtonRow>
      </CardSegment>
    </Card>
  ))
  .add('icon buttons', () => (
    <Card>
      <CardSegment vertical>
        <H2>Button w/ Icons</H2>
        <ButtonRow>
          <Button color="success">{LaunchIcon}</Button>
          <Button size="small" startIcon={LaunchIcon}>To the Moon</Button>
          <Button startIcon={LaunchIcon}>To the Moon</Button>
          <Button size="large" endIcon={LaunchIcon}>To the Moon</Button>
        </ButtonRow>
      </CardSegment>
    </Card>
  ))
  .add('Speed Dial', () => {
    const [isOpen, setOpen, setClose] = useBoolean(false);
    return (
      <SpeedDial
          ariaLabel="Speed Dial Actions"
          icon={<SpeedDialIcon />}
          open={isOpen}
          onOpen={setOpen}
          onClose={setClose}>
        <SpeedDialAction tooltipTitle="Create" icon={NewLocationIcon} />
      </SpeedDial>
    );
  });
