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
  CopyButton,
  EditButton,
  IconButton,
  MinusButton,
  PlusButton,
  SearchButton,
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

const LaunchIcon = (
  <FontAwesomeIcon icon={faSpaceShuttle} transform={{ rotate: -45 }} />
);

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
          <Button href="/?path=/story/button--buttons">href</Button>
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
          <Button variant="outlined" size="small">Small</Button>
          <Button variant="outlined" size="medium">Medium</Button>
          <Button variant="outlined" size="large">Large</Button>
        </ButtonRow>
        <ButtonRow>
          <Button variant="text" size="small">Small</Button>
          <Button variant="text" size="medium">Medium</Button>
          <Button variant="text" size="large">Large</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Disabled</H2>
        <ButtonRow>
          <Button disabled>Default</Button>
          <Button disabled color="primary">Primary</Button>
          <Button disabled color="secondary">Secondary</Button>
          <Button disabled color="success">Success</Button>
          <Button disabled color="error">Error</Button>
          <Button disabled color="warning">Warning</Button>
          <Button disabled color="info">Info</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>isLoading</H2>
        <ButtonRow>
          <Button isLoading>Default</Button>
          <Button isLoading color="primary">Primary</Button>
          <Button isLoading color="secondary">Secondary</Button>
          <Button isLoading color="success">Success</Button>
          <Button isLoading color="error">Error</Button>
          <Button isLoading color="warning">Warning</Button>
          <Button isLoading color="info">Info</Button>
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
        <H2>Search Button</H2>
        <ButtonRow>
          <SearchButton color="primary" />
          <SearchButton color="primary">Search</SearchButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Copy Button</H2>
        <ButtonRow>
          <CopyButton color="secondary" />
          <CopyButton color="secondary">Copy</CopyButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Edit Button</H2>
        <ButtonRow>
          <EditButton />
          <EditButton>Edit</EditButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Plus Button</H2>
        <ButtonRow>
          <PlusButton color="success" />
          <PlusButton color="success">Add</PlusButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Minus Button</H2>
        <ButtonRow>
          <MinusButton color="error" />
          <MinusButton color="error">Remove</MinusButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Custom Icon Button</H2>
        <ButtonRow>
          <IconButton icon={LaunchIcon} />
          <IconButton icon={LaunchIcon}>Launch</IconButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Size: small</H2>
        <ButtonRow>
          <SearchButton size="small" color="primary" />
          <CopyButton size="small" color="secondary" />
          <EditButton size="small" />
          <PlusButton size="small" color="success" />
          <MinusButton size="small" color="error" />
          <IconButton size="small" icon={LaunchIcon} />
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
