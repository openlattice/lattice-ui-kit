import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Input from './Input';

describe('Input', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<Input />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
