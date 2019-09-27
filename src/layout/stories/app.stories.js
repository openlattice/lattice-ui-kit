import React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HashRouter, NavLink } from 'react-router-dom';

import OpenLatticeLogo from './logo_v2.png';
import { DataGrid } from '../../components/search';
import { SearchInput } from '../../text';
import {
  AppContainerWrapper,
  AppContentWrapper,
  AppHeaderWrapper,
  Card,
  CardSegment,
  CardStack,
} from '../../index';
import { NEUTRALS } from '../../colors';

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

const SearchWrapper = styled.div`
  align-self: center;
  padding: 50px 0;
  width: 300px;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);

  .a {
    grid-column: 1 / span 4;
    grid-row: 1 / span 3;
  }

  .b {
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;
  }

  .c {
    grid-column: 5 / span 8;
    grid-row: 1;
  }

  .d {
    grid-column: 5 / span 8;
    grid-row: 2;
  }

  .e {
    grid-column: 5 / span 8;
    grid-row: 3;
  }

  .f {
    grid-column: 5 / span 8;
    grid-row: 4;
  }
`;

const mockMetallica = [
  Map({
    index: '1',
    FirstName: 'James',
    LastName: 'Hetfield',
    DateOfBirth: 'August 3, 1963',
  }),
  Map({
    index: '2',
    FirstName: 'Lars',
    LastName: 'Ulrich',
    DateOfBirth: 'December 26, 1963',
  }),
  Map({
    index: '3',
    FirstName: 'Kirk',
    LastName: 'Hammett',
    DateOfBirth: 'November 18, 1962',
  }),
  Map({
    index: '4',
    FirstName: 'Robert',
    LastName: 'Trujillo',
    DateOfBirth: 'October 23, 1964',
  }),
];

const mockOrgs = Map({
  org1: { id: 'org1', title: 'OpenLattice' },
  org2: { id: 'org2', title: 'JustBeamIt' },
  org3: { id: 'org3', title: 'Metallica' },
});

storiesOf('App', module)
  .add('search section', () => (
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
            <SearchInput value="Metallica" />
          </SearchWrapper>
        </SearchContentWrapper>
        <StoryAppContentWrapper contentWidth={1200}>
          <CardStack>
            <Card><CardSegment padding="sm"><DataGrid columns={4} data={mockMetallica[0]} /></CardSegment></Card>
            <Card><CardSegment padding="sm"><DataGrid columns={4} data={mockMetallica[1]} /></CardSegment></Card>
            <Card><CardSegment padding="sm"><DataGrid columns={4} data={mockMetallica[2]} /></CardSegment></Card>
            <Card><CardSegment padding="sm"><DataGrid columns={4} data={mockMetallica[3]} /></CardSegment></Card>
          </CardStack>
        </StoryAppContentWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ))
  .add('profile grid', () => (
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
        <StoryAppContentWrapper>
          <ProfileGrid>
            <Card className="a">
              <CardSegment style={{ justifyContent: 'center' }}>
                <img alt="" src={OpenLatticeLogo} height={200} />
              </CardSegment>
              <CardSegment>OpenLattice</CardSegment>
            </Card>
            <Card className="b"><CardSegment /></Card>
            <Card className="c">
              <CardSegment vertical>
                <DataGrid columns={3} data={Map({ status: 'Active', score: 0, something: 100 })} />
              </CardSegment>
            </Card>
            <Card className="d"><CardSegment /></Card>
            <Card className="e"><CardSegment /></Card>
            <Card className="f">
              <CardSegment vertical>
                <span>hello world</span>
              </CardSegment>
            </Card>
          </ProfileGrid>
        </StoryAppContentWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ))
  .add('organizations select', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper
            icon={OpenLatticeLogo}
            logout={action('clicked logout')}
            organizationsSelect={{
              onChange: action('org select'),
              organizations: mockOrgs,
            }}
            user="storybook@openlattice.com">
          <NavLink to="/home" />
          <NavLink to="/tab2">Tab 1</NavLink>
          <NavLink to="/tab3">Tab 2</NavLink>
        </StoryAppHeaderWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ))
  .add('automatic nav wrapping', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper
            icon={OpenLatticeLogo}
            logout={action('clicked logout')}
            organizationsSelect={{
              onChange: action('org select'),
              organizations: mockOrgs,
            }}
            user="storybook@openlattice.com">
          <NavLink to="/home" />
          <NavLink to="/tab2">Data</NavLink>
          <NavLink to="/tab4">Admin</NavLink>
          <NavLink to="/tab5">Settings</NavLink>
        </StoryAppHeaderWrapper>
        <StoryAppContentWrapper>
          <p style={{ textAlign: 'center' }}>resize the browser to see how the navigation will wrap below the header</p>
        </StoryAppContentWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ));
