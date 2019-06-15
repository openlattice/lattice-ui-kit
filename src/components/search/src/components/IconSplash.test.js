import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/pro-regular-svg-icons';
import { shallow } from 'enzyme';

import IconSplash from './IconSplash';

describe('IconSplash', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<IconSplash icon={faSearchMinus} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render provided icon', () => {
    const wrapper = shallow(<IconSplash icon={faSearchMinus} />);
    expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(faSearchMinus);
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
