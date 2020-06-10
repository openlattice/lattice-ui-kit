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
  background: linear-gradient(45deg, purple 30%, magenta 90%);
  border-radius: 5px;
  font-size: 16px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
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
          <Button color="positive">Positive</Button>
          <Button color="negative">Negative</Button>
          <Button color="warning">Warning</Button>
          <Button href="/?path=/story/button--buttons">href</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Outlined</H2>
        <ButtonRow>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="positive">Positive</Button>
          <Button variant="outlined" color="negative">Negative</Button>
          <Button variant="outlined" color="warning">Warning</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Text</H2>
        <ButtonRow>
          <Button variant="text">Default</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="positive">Positive</Button>
          <Button variant="text" color="negative">Negative</Button>
          <Button variant="text" color="warning">Warning</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Size</H2>
        <ButtonRow>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Disabled</H2>
        <ButtonRow>
          <Button disabled>Default</Button>
          <Button disabled color="primary">Primary</Button>
          <Button disabled color="secondary">Secondary</Button>
          <Button disabled color="positive">Positive</Button>
          <Button disabled color="negative">Negative</Button>
          <Button disabled color="warning">Warning</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>isLoading</H2>
        <ButtonRow>
          <Button isLoading>Default</Button>
          <Button isLoading color="primary">Primary</Button>
          <Button isLoading color="secondary">Secondary</Button>
          <Button isLoading color="positive">Positive</Button>
          <Button isLoading color="negative">Negative</Button>
          <Button isLoading color="warning">Warning</Button>
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
          <StyledButton>Styled</StyledButton>
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
          <PlusButton color="positive" />
          <PlusButton color="positive">Add</PlusButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Minus Button</H2>
        <ButtonRow>
          <MinusButton color="negative" />
          <MinusButton color="negative">Remove</MinusButton>
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
          <PlusButton size="small" color="positive" />
          <MinusButton size="small" color="negative" />
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
