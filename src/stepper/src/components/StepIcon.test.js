import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';

import StepIcon from './StepIcon';
import { PURPLES } from '../../../colors';
import { StepIndex } from './styled';

describe('StepIcon', () => {

  describe('default', () => {
    test('should match snapshot', () => {
      const wrapper = mount(<StepIndex index={0} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('active should set color', () => {
      const wrapper = shallow(<StepIcon index={0} active />);
      expect(wrapper.find(FontAwesomeIcon).prop('color')).toBe(PURPLES[2]);
    });

    test('render index + 1', () => {
      const wrapper = shallow(<StepIcon index={0} />);
      expect(wrapper.find(StepIndex).text()).toBe('0');
    });
  });

  describe('complete', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<StepIcon index={0} complete />);
    });

    test('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('complete should set color', () => {
      expect(wrapper.find(FontAwesomeIcon).first().prop('color')).toBe(PURPLES[2]);
    });

    test('should should render icon instead of index', () => {
      expect(wrapper.find(StepIndex)).toHaveLength(0);
      expect(wrapper.find(FontAwesomeIcon).last().prop('icon')).toBe(faCheck);
    });

  });


});
