import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import FolderTabs from './FolderTabs';

describe('FolderTabs', () => {

  describe('default', () => {
    test('should match snapshot', () => {
      const wrapper = mount(<FolderTabs />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
