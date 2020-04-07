import React from 'react';

import toJson from 'enzyme-to-json';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';

import IconSplash from './IconSplash';

describe('IconSplash', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<IconSplash icon={faSearchMinus} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should not render icon if undefined', () => {
    const wrapper = shallow(<IconSplash />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });

  test('should render provided FontAwesome IconDefinition', () => {
    const wrapper = shallow(<IconSplash icon={faSearchMinus} />);
    expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(faSearchMinus);
  });

  test('should invoke icon render prop', () => {
    const iconMock = jest.fn();
    shallow(<IconSplash icon={iconMock} />);
    expect(iconMock).toHaveBeenCalledWith('5x');
  });

  test('should render caption', () => {
    const caption = '404: Resource not found';
    const wrapper = shallow(<IconSplash icon={faSearchMinus} caption={caption} />);
    expect(wrapper.find('figcaption').text()).toEqual(caption);
  });

  test('should pass size to FontAwesomeIcon', () => {
    const size = 'lg';
    const wrapper = shallow(<IconSplash icon={faSearchMinus} size={size} />);
    expect(wrapper.find(FontAwesomeIcon).props().size).toEqual(size);
  });

});
