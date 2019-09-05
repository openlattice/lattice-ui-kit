import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import IconButton from './IconButton';
import MinusButton from './MinusButton';

const BUTTON_TXT = 'Edit';

describe('MinusButton', () => {

  describe('icon with text', () => {

    const minusButton = mount(
      <MinusButton>{BUTTON_TXT}</MinusButton>
    );

    test('should match snapshot', () => {
      expect(toJson(minusButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(minusButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(minusButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(minusButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(minusButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(minusButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const minusButton = mount(
      <MinusButton />
    );

    test('should match snapshot', () => {
      expect(toJson(minusButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(minusButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(minusButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(minusButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(minusButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(minusButton.text()).toEqual('');
    });

  });

});
