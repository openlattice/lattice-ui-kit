import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import IconButton from './IconButton';
import SearchButton from './SearchButton';

const BUTTON_TXT = 'Search';

describe('SearchButton', () => {

  describe('icon with text', () => {

    const searchButton = mount(
      <SearchButton>{BUTTON_TXT}</SearchButton>
    );

    test('should match snapshot', () => {
      expect(toJson(searchButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(searchButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(searchButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(searchButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(searchButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(searchButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const searchButton = mount(
      <SearchButton />
    );

    test('should match snapshot', () => {
      expect(toJson(searchButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(searchButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(searchButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(searchButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(searchButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(searchButton.text()).toEqual('');
    });

  });

});
