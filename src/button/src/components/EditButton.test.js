import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import EditButton from './EditButton';
import IconButton from './IconButton';

const BUTTON_TXT = 'Edit';

describe('EditButton', () => {

  describe('icon with text', () => {

    const editButton = mount(
      <EditButton>{BUTTON_TXT}</EditButton>
    );

    test('should match snapshot', () => {
      expect(toJson(editButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(editButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(editButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(editButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(editButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(editButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const editButton = mount(
      <EditButton />
    );

    test('should match snapshot', () => {
      expect(toJson(editButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(editButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(editButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(editButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(editButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(editButton.text()).toEqual('');
    });

  });

});
