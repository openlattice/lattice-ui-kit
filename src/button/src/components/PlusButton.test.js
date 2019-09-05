import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import IconButton from './IconButton';
import PlusButton from './PlusButton';

const BUTTON_TXT = 'Edit';

describe('PlusButton', () => {

  describe('icon with text', () => {

    const plusButton = mount(
      <PlusButton>{BUTTON_TXT}</PlusButton>
    );

    test('should match snapshot', () => {
      expect(toJson(plusButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(plusButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(plusButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(plusButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(plusButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(plusButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const plusButton = mount(
      <PlusButton />
    );

    test('should match snapshot', () => {
      expect(toJson(plusButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(plusButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(plusButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(plusButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(plusButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(plusButton.text()).toEqual('');
    });

  });

});
