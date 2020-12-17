import React from 'react';

import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Map } from 'immutable';
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

const SearchWrapper = styled.div`
  align-self: center;
  padding: 50px 0;
  width: 300px;
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

export default {
  title: 'App',
};

export const HeaderVariations = () => (
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
);

HeaderVariations.story = {
  name: 'header variations',
};

export const NavigationDefault = () => (
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
          <p style={{ textAlign: 'center' }}>
            app navigation is a part of the header, with automatic wrapping
          </p>
          <p style={{ textAlign: 'center' }}>
            resize window to see how the navigation will wrap below the header
          </p>
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
);

NavigationDefault.story = {
  name: 'navigation default',
};

export const NavigationDrawer = () => (
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
);

NavigationDrawer.story = {
  name: 'navigation drawer',
};

export const ExamplePage = () => (
  <HashRouter>
    <StoryAppContainerWrapper>
      <StoryAppHeaderWrapper
          appIcon={OpenLatticeLogo}
          logout={() => {}}
          organizationsSelect={mockOrgSelect}
          user={mockUser}>
        <StoryAppNavigationWrapper>
          <NavLink to="/home" />
          <NavLink to="/tab1">Tab 1</NavLink>
          <NavLink to="/tab2">Tab 2</NavLink>
          <NavLink to="/tab3">Tab 3</NavLink>
        </StoryAppNavigationWrapper>
      </StoryAppHeaderWrapper>
      <StoryAppNavigationWrapper>
        <NavLink to="/subtab1">SubTab 1</NavLink>
        <NavLink to="/subtab2">SubTab 2</NavLink>
        <NavLink to="/subtab3">SubTab 3</NavLink>
      </StoryAppNavigationWrapper>
      <StoryAppContentWrapper bgColor="#fff" borderless>
        <SearchWrapper>
          <SearchInput value="Metallica" />
        </SearchWrapper>
      </StoryAppContentWrapper>
      <StoryAppContentWrapper bgColor="#fff" padding="0">
        <StoryAppNavigationWrapper borderless>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/permission">Permissions</NavLink>
        </StoryAppNavigationWrapper>
      </StoryAppContentWrapper>
      <StoryAppContentWrapper>
        <CardStack>
          <Card>
            <CardSegment padding="sm">
              <DataGrid columns={4} data={mockMetallica[0]} />
            </CardSegment>
          </Card>
          <Card>
            <CardSegment padding="sm">
              <DataGrid columns={4} data={mockMetallica[1]} />
            </CardSegment>
          </Card>
          <Card>
            <CardSegment padding="sm">
              <DataGrid columns={4} data={mockMetallica[2]} />
            </CardSegment>
          </Card>
          <Card>
            <CardSegment padding="sm">
              <DataGrid columns={4} data={mockMetallica[3]} />
            </CardSegment>
          </Card>
        </CardStack>
      </StoryAppContentWrapper>
    </StoryAppContainerWrapper>
  </HashRouter>
);
