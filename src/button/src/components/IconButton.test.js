import React from 'react';
import toJson from 'enzyme-to-json';
import { faSpaceShuttle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import IconButton from './IconButton';

const BUTTON_TXT = 'Launch!';

describe('IconButton', () => {

  describe('icon with text', () => {

    const iconButton = mount(
      <IconButton icon={faSpaceShuttle}>
        {BUTTON_TXT}
      </IconButton>
    );

    test('should match snapshot', () => {
      expect(toJson(iconButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(iconButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(iconButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(iconButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(iconButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const iconButton = mount(
      <IconButton icon={faSpaceShuttle} />
    );

    test('should match snapshot', () => {
      expect(toJson(iconButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(iconButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(iconButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(iconButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(iconButton.text()).toEqual('');
    });

  });

});
