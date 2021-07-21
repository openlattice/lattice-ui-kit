import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import FolderTab from './FolderTab';

describe('FolderTab', () => {

  describe('default', () => {
    test('should match snapshot', () => {
      const wrapper = mount(<FolderTab label="Tab" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
