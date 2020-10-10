/*
 * @flow
 */

import React from 'react';

import _capitalize from 'lodash/capitalize';
import toJson from 'enzyme-to-json';
import { faCode } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import IconButton from './IconButton';

import Spinner from '../../../spinner';

const CodeIcon = (
  <FontAwesomeIcon icon={faCode} />
);

const intentColors = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];

describe('IconButton', () => {

  describe('snapshots', () => {

    test('default', () => {
      const wrapper = mount(<IconButton>{CodeIcon}</IconButton>);
      expect(toJson(wrapper)).toMatchSnapshot();
      const button = wrapper.find('button');
      expect(button).toHaveLength(1);
    });

    test('spinner', () => {
      const wrapper = mount(<IconButton isLoading>{CodeIcon}</IconButton>);
      expect(toJson(wrapper)).toMatchSnapshot();
      const button = wrapper.find('button');
      expect(button).toHaveLength(1);
    });

  });

  describe('props', () => {

    test('color', () => {
      intentColors.forEach((color) => {
        const wrapper = mount(<IconButton color={color}>{CodeIcon}</IconButton>);
        const button = wrapper.find('button');
        expect(button.prop('className')).toEqual(expect.stringMatching(`makeStyles-text${_capitalize(color)}`));
      });
      // themeColors.forEach((color) => {
      //   const wrapper = mount(<IconButton color={color}>{CodeIcon}</IconButton>);
      //   const button = wrapper.find('button');
      //   console.log(color);
      //   console.log(button.prop('className'));
      //   expect(button.prop('className')).toEqual(expect.stringMatching(`MuiIconButton-color${_capitalize(color)}`));
      // });
    });

    test('disabled', () => {
      const wrapper = mount(<IconButton disabled>{CodeIcon}</IconButton>);
      const button = wrapper.find('button');
      expect(button.prop('disabled')).toEqual(true);
      expect(button.prop('className')).toEqual(expect.stringMatching('Mui-disabled'));
    });

    test('isLoading', () => {
      const wrapper = mount(<IconButton isLoading>{CodeIcon}</IconButton>);
      const button = wrapper.find('button');
      expect(button.prop('disabled')).toEqual(true);
      expect(button.prop('className')).toEqual(expect.stringMatching('Mui-disabled'));
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

  });

});
