import React from 'react';
import styled from 'styled-components';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('styles', () => {
    test('should pass bottomColor prop to spinner circle', () => {
      const newColor = 'rebeccapurple';
      const wrapper = shallow(<Spinner bottomColor={newColor} />);
      expect(wrapper.find('FontAwesomeIcon#spinner-circle').props().color).toEqual(newColor);
    });

    test('should pass topColor prop spinner third', () => {
      const newColor = 'rebeccapurple';
      const wrapper = shallow(<Spinner topColor={newColor} />);
      expect(wrapper.find('FontAwesomeIcon#spinner-third').props().color).toEqual(newColor);
    });

    test('should pass duration prop to Rotate', () => {
      const duration = '2s';
      const wrapper = shallow(<Spinner duration={duration} />);
      expect(wrapper.find('Rotate').props().duration).toEqual(duration);
      expect(wrapper.find('Rotate').props().duration).toEqual(duration);
    });

    test('should adjust fa-{size} className', () => {
      const size = '2x';
      const wrapper = shallow(<Spinner size={size} />);
      expect(wrapper.find(`Rotate.fa-${size}`)).toHaveLength(1);
    });

    test('should allow styled classNames', () => {
      const StyledSpinner = styled(Spinner)`
        font-size: 20px;
      `;

      const wrapper = mount(<StyledSpinner />);
      expect(wrapper.find('Rotate')).toHaveStyleRule('font-size', '20px');
    });

  });

});
