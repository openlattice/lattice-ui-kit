import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<SearchInput />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

});
