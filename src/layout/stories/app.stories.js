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
  AppNavigationWrapper,
  Card,
  CardSegment,
  CardStack,
} from '../index';
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

const StoryAppNavigationWrapper = styled(AppNavigationWrapper)`
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

const mockOrgSelect = {
  onChange: action('org select'),
  organizations: mockOrgs,
};

const mockUser = 'storybook@openlattice.com';

storiesOf('App', module)
  .add('header variations', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper appIcon={OpenLatticeLogo} appTitle="Custom App Title" />
        <br />
        <StoryAppHeaderWrapper appIcon={OpenLatticeLogo} user={mockUser} />
        <br />
        <StoryAppHeaderWrapper appIcon={OpenLatticeLogo} logout={() => {}} user={mockUser} />
        <br />
        <StoryAppHeaderWrapper
            appIcon={OpenLatticeLogo}
            logout={() => {}}
            organizationsSelect={mockOrgSelect}
            user={mockUser} />
        <br />
        <StoryAppHeaderWrapper
            appIcon={OpenLatticeLogo}
            logout={() => {}}
            organizationsSelect={mockOrgSelect}
            user={mockUser}>
          <StoryAppNavigationWrapper>
            <NavLink to="/home" />
            <NavLink to="/tab1">Tab 1</NavLink>
            <NavLink to="/tab2">Tab 2</NavLink>
          </StoryAppNavigationWrapper>
        </StoryAppHeaderWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ))
  .add('search section', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper appIcon={OpenLatticeLogo} logout={() => {}} user={mockUser}>
          <StoryAppNavigationWrapper>
            <NavLink to="/home" />
            <NavLink to="/tab1">Tab 1</NavLink>
            <NavLink to="/tab2">Tab 2</NavLink>
          </StoryAppNavigationWrapper>
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
        <StoryAppHeaderWrapper appIcon={OpenLatticeLogo} logout={() => {}} user={mockUser}>
          <StoryAppNavigationWrapper>
            <NavLink to="/home" />
            <NavLink to="/tab1">Tab 1</NavLink>
            <NavLink to="/tab2">Tab 2</NavLink>
          </StoryAppNavigationWrapper>
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
  .add('navigation default', () => (
    <>
      <HashRouter>
        <StoryAppContainerWrapper>
          <StoryAppHeaderWrapper
              appIcon={OpenLatticeLogo}
              logout={() => {}}
              organizationsSelect={mockOrgSelect}
              user={mockUser}>
            <StoryAppNavigationWrapper>
              <NavLink to="/home" />
              <NavLink to="/tab1">Data</NavLink>
              <NavLink to="/tab2">Administration</NavLink>
              <NavLink to="/tab3">Settings</NavLink>
            </StoryAppNavigationWrapper>
          </StoryAppHeaderWrapper>
          <StoryAppContentWrapper>
            <p style={{ textAlign: 'center' }}>app navigation is a part of the header, with automatic wrapping</p>
            <p style={{ textAlign: 'center' }}>resize window to see how the navigation will wrap below the header</p>
          </StoryAppContentWrapper>
          <br />
          <br />
          <br />
          <StoryAppHeaderWrapper
              appIcon={OpenLatticeLogo}
              logout={() => {}}
              organizationsSelect={mockOrgSelect}
              user={mockUser} />
          <StoryAppNavigationWrapper>
            <NavLink to="/tab1">Data Management</NavLink>
            <NavLink to="/tab2">Administration</NavLink>
            <NavLink to="/tab3">Settings</NavLink>
          </StoryAppNavigationWrapper>
          <StoryAppContentWrapper>
            <p style={{ textAlign: 'center' }}>app navigation is separate from the header</p>
          </StoryAppContentWrapper>
        </StoryAppContainerWrapper>
      </HashRouter>
    </>
  ))
  .add('navigation drawer', () => (
    <HashRouter>
      <StoryAppContainerWrapper>
        <StoryAppHeaderWrapper
            appIcon={OpenLatticeLogo}
            logout={() => {}}
            organizationsSelect={mockOrgSelect}
            user={mockUser}>
          <StoryAppNavigationWrapper drawer>
            <NavLink to="/home" />
            <NavLink to="/tab1">Data</NavLink>
            <NavLink to="/tab2">Administration</NavLink>
            <hr />
            <NavLink to="/tab3">Settings</NavLink>
            <NavLink to="/sign-out">Sign Out</NavLink>
          </StoryAppNavigationWrapper>
        </StoryAppHeaderWrapper>
      </StoryAppContainerWrapper>
    </HashRouter>
  ));
