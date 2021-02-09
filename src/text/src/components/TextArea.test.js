import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import TextArea from './TextArea';

describe('TextArea', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<TextArea />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
