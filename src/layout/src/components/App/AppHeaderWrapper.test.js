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

const logout = () => {};

describe('AppHeaderWrapper', () => {

  describe('snapshots', () => {

    test('default', () => {
      const wrapper = shallow(
        <AppHeaderWrapper />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('logout', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout}>
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('navigation wrapping', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout}>
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      wrapper.setState({ shouldWrapNavigation: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('select', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} organizationsSelect={{ organizations: mockOrgs }} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('select + navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} organizationsSelect={{ organizations: mockOrgs }}>
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} user="jest@openlattice.com" />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user + navigation', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} user="jest@openlattice.com">
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('user + navigation + select', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} organizationsSelect={{ organizations: mockOrgs }} user="jest@openlattice.com">
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('force drawer', () => {
      const wrapper = shallow(
        <AppHeaderWrapper logout={logout} organizationsSelect={{ organizations: mockOrgs }} user="jest@openlattice.com">
          <div>{mockTabs}</div>
        </AppHeaderWrapper>
      );
      wrapper.setState({ shouldForceDrawer: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

});
