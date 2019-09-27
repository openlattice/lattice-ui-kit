import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import AppHeaderWrapper from './AppHeaderWrapper';

const mockOrgs = {
  org1: { id: 'org1', title: 'OpenLattice' },
  org2: { id: 'org2', title: 'JustBeamIt' },
  org3: { id: 'org3', title: 'Metallica' },
};

const mockTabs = [
  <a key="home" href="/home">Home</a>,
  <a key="tab1" href="/tab1">Tab1</a>,
  <a key="tab2" href="/tab2">Tab2</a>,
];

describe('AppHeaderWrapper', () => {

  describe('snapshots', () => {

    test('default', () => {
      const wrapper = shallow(
        <AppHeaderWrapper />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper>
          {mockTabs}
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('navigation wrapping', () => {
      const wrapper = shallow(
        <AppHeaderWrapper>
          {mockTabs}
        </AppHeaderWrapper>
      );
      wrapper.setState({ shouldWrapNav: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('select', () => {
      const wrapper = shallow(
        <AppHeaderWrapper organizationsSelect={{ organizations: mockOrgs }} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('select + navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper organizationsSelect={{ organizations: mockOrgs }}>
          {mockTabs}
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user', () => {
      const wrapper = shallow(
        <AppHeaderWrapper user="jest@openlattice.com" />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user + navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper user="jest@openlattice.com">
          {mockTabs}
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user + navigation + select', () => {
      const wrapper = shallow(
        <AppHeaderWrapper organizationsSelect={{ organizations: mockOrgs }} user="jest@openlattice.com">
          {mockTabs}
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

});
