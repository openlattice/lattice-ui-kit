import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Button from './Button';
import CopyButton from './CopyButton';
import IconButton from './IconButton';

const BUTTON_TXT = 'Copy';

describe('CopyButton', () => {

  describe('icon with text', () => {

    const copyButton = mount(
      <CopyButton>{BUTTON_TXT}</CopyButton>
    );

    test('should match snapshot', () => {
      expect(toJson(copyButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(copyButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(copyButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(copyButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(copyButton.find(Button)).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(copyButton.text()).toEqual(BUTTON_TXT);
    });

  });

  describe('icon without text', () => {

    const copyButton = mount(
      <CopyButton />
    );

    test('should match snapshot', () => {
      expect(toJson(copyButton)).toMatchSnapshot();
    });

    test('should render a button element', () => {
      expect(copyButton.find('button')).toHaveLength(1);
    });

    test('should render FontAwesomeIcon component', () => {
      expect(copyButton.find(FontAwesomeIcon)).toHaveLength(1);
    });

    test('should render IconButton component', () => {
      expect(copyButton.find(IconButton)).toHaveLength(1);
    });

    test('should render Button component', () => {
      expect(copyButton.find(Button)).toHaveLength(1);
    });

    test('should not render any text', () => {
      expect(copyButton.text()).toEqual('');
    });

  });

});
