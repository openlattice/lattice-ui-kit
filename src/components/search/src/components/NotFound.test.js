import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/pro-regular-svg-icons';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('NotFound', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render searchMinus icon', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(faSearchMinus);
  });

  test('should render caption', () => {
    const caption = '404: Resource not found';
    const wrapper = shallow(<NotFound caption={caption} />);
    expect(wrapper.find('figcaption').text()).toEqual(caption);
  });

  test('should pass size to FontAwesomeIcon', () => {
    const size = 'lg';
    const wrapper = shallow(<NotFound size={size} />);
    expect(wrapper.find(FontAwesomeIcon).props().size).toEqual(size);
  });

});
