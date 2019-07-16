import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Step from './Step';
import StepIcon from './StepIcon';
import { StepWrapper, StepLabel } from './styled';

describe('Step', () => {
  test('should match snapshot', () => {
    const wrapper = mount(<Step index={0}>Step 1</Step>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('styles', () => {
    test('default styles', () => {
      const wrapper = mount(<Step index={0}>Step 1</Step>);
      expect(wrapper.find(StepWrapper)).toHaveStyleRule('display', 'flex');
      expect(wrapper.find(StepWrapper)).toHaveStyleRule('align-items', 'center');
      expect(wrapper.find(StepWrapper)).toHaveStyleRule('padding', '10px');
    });

    test('onClick adds pointer styles', () => {
      const wrapper = mount(<Step index={0} onClick={() => {}}>Step 1</Step>);
      expect(wrapper.find(StepWrapper)).toHaveStyleRule('cursor', 'pointer');
    });
  });


  test('render StepIcon and StepLabel', () => {
    const wrapper = shallow(<Step index={0}>Step 1</Step>);
    expect(wrapper.find(StepIcon).prop('index')).toBe(0);
    expect(wrapper.find(StepLabel).text()).toBe('Step 1');
  });

});
