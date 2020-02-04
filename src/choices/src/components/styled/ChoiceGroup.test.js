import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import ChoiceGroup from './ChoiceGroup';

describe('ChoiceGroup', () => {
  test('row=true should yield multiple columns', () => {
    const wrapper = mount(<ChoiceGroup row />);
    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(auto-fit,minmax(200px,1fr))');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('row=false should yield single column', () => {
    const wrapper = mount(<ChoiceGroup />);
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
