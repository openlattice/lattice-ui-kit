import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HashRouter, NavLink } from 'react-router-dom';

import OpenLatticeLogo from './logo_v2.png';
import { Button } from '../../button';
import { SearchInput } from '../../text';
import {
  AppContainerWrapper,
  AppContentWrapper,
  AppHeaderWrapper,
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from '../index';
import { NEUTRALS, PURPLES } from '../../colors';

const StoryAppContainerWrapper = styled(AppContainerWrapper)`
  min-width: 600px; /* overriding only for the story */
`;

const StoryAppHeaderWrapper = styled(AppHeaderWrapper)`
  > div {
    min-width: 600px; /* overriding only for the story */
  }
`;

const StoryAppContentWrapper = styled(AppContentWrapper)`
  > div {
    min-width: 600px; /* overriding only for the story */
  }
`;

const SearchContentWrapper = styled(StoryAppContentWrapper)`
  border-bottom: 1px solid ${NEUTRALS[5]};
  > div {
    min-width: 600px; /* overriding only for the story */
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  ${Card} {
    align-items: center;
    min-width: 0; /* setting min-width ensures cards do not overflow the grid column */
  }
`;

const SearchWrapper = styled.div`
  align-self: center;
  padding: 50px 0;
  width: 300px;
`;

storiesOf('Layout', module)
  .add('App', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper
            icon={OpenLatticeLogo}
            logout={action('clicked logout')}
            user="storybook@openlattice.com">
          <NavLink to="/home" />
          <NavLink to="/tab2">Tab 1</NavLink>
          <NavLink to="/tab3">Tab 2</NavLink>
        </StoryAppHeaderWrapper>
        <SearchContentWrapper bgColor="#fff">
          <SearchWrapper>
            <SearchInput />
          </SearchWrapper>
        </SearchContentWrapper>
        <StoryAppContentWrapper>
          <CardGrid>
            <Card><CardSegment>1</CardSegment></Card>
            <Card><CardSegment>2</CardSegment></Card>
            <Card><CardSegment>3</CardSegment></Card>
            <Card><CardSegment>4</CardSegment></Card>
            <Card><CardSegment>5</CardSegment></Card>
            <Card><CardSegment>6</CardSegment></Card>
            <Card><CardSegment>7</CardSegment></Card>
            <Card><CardSegment>8</CardSegment></Card>
          </CardGrid>
        </StoryAppContentWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ))
  .add('Card', () => (
    <CardStack>
      <Card>Blank Card</Card>
      <Card>
        <CardSegment>
          With segment
        </CardSegment>
      </Card>
      <Card onClick={action('clicked on card')}>
        <CardSegment>
          With segment and onClick
        </CardSegment>
      </Card>
    </CardStack>
  ))
  .add('CardHeader', () => {
    const modes = [
      'Mode not specified',
      'danger',
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
    ];
    return (
      <CardStack>
        { modes.map((mode) => (
          <Card key={mode}>
            <CardHeader mode={mode} padding="sm">
              {mode}
            </CardHeader>
            <CardSegment>
              Body
            </CardSegment>
          </Card>
        )) }
      </CardStack>
    );
  })
  .add('CardSegment', () => (
    <CardStack>
      <Card>
        <CardSegment>Segment 1</CardSegment>
        <CardSegment>Segment 2</CardSegment>
        <CardSegment>Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment noBleed>Segment 1</CardSegment>
        <CardSegment noBleed>Segment 2</CardSegment>
        <CardSegment noBleed>Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment indent={4}>Indented Segment 1</CardSegment>
        <CardSegment indent={12}>Indented Segment 2</CardSegment>
        <CardSegment indent={24}>Indented Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment indent={4} noBleed>Indented Segment 1</CardSegment>
        <CardSegment indent={12} noBleed>Indented Segment 2</CardSegment>
        <CardSegment indent={24} noBleed>Indented Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment>
          <Button mode="primary">default</Button>
          <Button mode="secondary">flex</Button>
          <Button>row</Button>
        </CardSegment>
      </Card>

      <Card>
        <CardSegment vertical>
          <Button mode="primary">vertical</Button>
          <Button mode="secondary">card</Button>
          <Button>segment</Button>
        </CardSegment>
      </Card>

      <Card>
        <CardSegment bgColor={PURPLES[2]}>bgColor</CardSegment>
        <CardSegment bgColor={PURPLES[3]}>bgColor</CardSegment>
        <CardSegment bgColor={PURPLES[4]}>bgColor</CardSegment>
      </Card>
    </CardStack>
  ))
  .add('Card Stack', () => (
    <CardStack>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
    </CardStack>
  ));
