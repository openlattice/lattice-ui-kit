// @flow
import React from 'react';

import styled from 'styled-components';
import { faSearch, faTrash, faUserPlus } from '@fortawesome/pro-light-svg-icons';
import { faDrone, faMapMarkerPlus, faSpaceShuttle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { storiesOf } from '@storybook/react';

import { useBoolean } from '../../hooks';
import { Card, CardSegment } from '../../layout';
import { Button, IconButton } from '..';
import Typography from '../../typography';

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
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
  }
`;

const StyledIconButton = styled(IconButton)`
  color: #ff006e;

  :hover {
    background: linear-gradient(45deg, #EDE342 30%, #FF51EB 90%);
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
          <Button variant="outlined" size="small">Small</Button>
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
      <CardSegment vertical>
        <H2>Button w/ Icons</H2>
        <ButtonRow>
          <Button color="success">{LaunchIcon}</Button>
          <Button size="small" startIcon={LaunchIcon}>To the Moon</Button>
          <Button startIcon={LaunchIcon}>To the Moon</Button>
          <Button size="large" endIcon={LaunchIcon}>To the Moon</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment>
        <H2>Accessiblity</H2>
        <ul>
          <li>
            <Typography variant="subtitle1" gutterBottom>
              For buttons that that inherit styles, note that color contrast for
              {' '}
              <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast">non-text elements</a>
              {' '}
              should be at least 3:1, and for
              {' '}
              <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum">text elements</a>
              {' '}
              should be at least 4.5:1. This option will also fall back to the browsers default active and focus styles.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom>
              Buttons must have discernible text that clearly describes the destination, purpose,
              function, or action for screen reader users.
            </Typography>
            <p>
              It provides the user with a recognizable
              name of the object. The most common accessibility API mapping for a label is
              the accessible name property.
            </p>
            <p>
              Ensure that each
              {' '}
              <code>button</code>
              {' '}
              element and elements with
              {' '}
              {/* eslint-disable-next-line */}
              <code>role="button"</code>
              {' '}
              have one of the following characteristics:
            </p>
            <ul>
              <li>Inner text that is discernible to screen reader users.</li>
              <li>
                Non-empty
                {' '}
                <code>aria-label</code>
                {' '}
                attribute.
              </li>
              <li>
                <code>aria-labelledby</code>
                {' '}
                pointing to element with text which is discernible to screen reader users (i.e. not
                {' '}
                <code>display: none;</code>
                {' '}
                or
                {' '}
                {/* eslint-disable-next-line */}
                <code>aria-hidden='true'</code>
                .)
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <code>role="presentation"</code>
                {' '}
                or
                {' '}
                {/* eslint-disable-next-line */}
                <code>role="none"</code>
                {' '}
                {/* eslint-disable-next-line */}
                (ARIA 1.1) and is not in tab order (tabindex="-1").
              </li>
            </ul>
            <p>
              <a href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value">more info</a>
            </p>
          </li>
        </ul>
      </CardSegment>
    </Card>
  ))
  .add('IconButton', () => {
    const [isLoading, setTrue, setFalse] = useBoolean(false);
    const handleOnClick = () => {
      setTrue();
      setTimeout(() => setFalse(), 1000);
    };
    return (
      <Card>
        <CardSegment>
          <ButtonRow>
            <IconButton aria-label="Small Success Icon Button" color="success" size="small">
              <FontAwesomeIcon fixedWidth icon={faUserPlus} />
            </IconButton>
            <IconButton aria-label="Success Icon Button" color="success">
              <FontAwesomeIcon fixedWidth icon={faUserPlus} />
            </IconButton>
            <IconButton aria-label="Small Error Icon Button" color="error" size="small">
              <FontAwesomeIcon fixedWidth icon={faTrash} />
            </IconButton>
            <IconButton aria-label="Error Icon Button" color="error">
              <FontAwesomeIcon fixedWidth icon={faTrash} />
            </IconButton>
          </ButtonRow>
        </CardSegment>
        <CardSegment>
          <H2>Pending State</H2>
          <ButtonRow>
            <IconButton aria-label="Primary Icon Button" color="primary" isLoading={isLoading} onClick={handleOnClick} size="small">
              <FontAwesomeIcon fixedWidth icon={faSpaceShuttle} />
            </IconButton>
            <IconButton aria-label="Primary Icon Button" color="primary" isLoading={isLoading} onClick={handleOnClick}>
              <FontAwesomeIcon fixedWidth icon={faSpaceShuttle} />
            </IconButton>
          </ButtonRow>
        </CardSegment>
        <CardSegment>
          <H2>FontAwesomeIcon size</H2>
          <ButtonRow>
            <IconButton aria-label="XS Icon Button">
              <FontAwesomeIcon fixedWidth icon={faSearch} size="xs" />
            </IconButton>
            <IconButton aria-label="Size Undefined Icon Button">
              <FontAwesomeIcon fixedWidth icon={faSearch} />
            </IconButton>
            <IconButton aria-label="LG Icon Button">
              <FontAwesomeIcon fixedWidth icon={faSearch} size="lg" />
            </IconButton>
            <IconButton aria-label="2X Icon Button">
              <FontAwesomeIcon fixedWidth icon={faSearch} size="2x" />
            </IconButton>
            <IconButton aria-label="3X Icon Button">
              <FontAwesomeIcon fixedWidth icon={faSearch} size="3x" />
            </IconButton>
          </ButtonRow>
        </CardSegment>
        <CardSegment>
          <H2>Styled</H2>
          <ButtonRow>
            <StyledIconButton aria-label="Styled Icon Button">
              <FontAwesomeIcon fixedWidth icon={faDrone} />
            </StyledIconButton>
          </ButtonRow>
        </CardSegment>
      </Card>
    );
  })
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
