import React from 'react';

import capitalize from 'lodash/capitalize';
import toJson from 'enzyme-to-json';
import { Button as MuiButton } from '@material-ui/core';
import { createMount } from '@material-ui/core/test-utils';

import Button from './Button';

import Spinner from '../../../spinner';
import { nope } from '../../../utils/testing/MockUtils';

const DEFAULT_BTN_TXT = 'DEFAULT_BUTTON';

const variants = ['contained', 'outlined', 'text'];
const themedColors = ['primary', 'secondary'];
const intentColors = [
  'error',
  'info',
  'success',
  'warning',
];
const sizes = ['small', 'large'];

describe('button', () => {

  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  describe('props', () => {
    test('fullWidth should add MuiButton-fullWidth class', () => {
      const wrapper = mount(<Button fullWidth>{ DEFAULT_BTN_TXT }</Button>);

      const button = wrapper.find('button.MuiButton-fullWidth');
      expect(button).toHaveLength(1);
    });

    test('disabled should add Mui-disabled class', () => {
      const wrapper = mount(<Button disabled>{ DEFAULT_BTN_TXT }</Button>);

      const button = wrapper.find('button.Mui-disabled');
      expect(button).toHaveLength(1);
    });

    test('isLoading should set startIcon to Spinner', () => {
      const wrapper = mount(<Button isLoading onClick={nope}>{ DEFAULT_BTN_TXT }</Button>);

      const disabled = wrapper.find('button.Mui-disabled');
      expect(disabled).toHaveLength(1);

      const span = wrapper.find('span.MuiButton-startIcon');
      expect(span).toHaveLength(1);

      const button = wrapper.find(MuiButton);
      expect(button.prop('startIcon').type).toEqual(<Spinner />.type);
    });
  });

  describe('variants & colors', () => {

    test('render contained by default', () => {
      const wrapper = mount(<Button>{ DEFAULT_BTN_TXT }</Button>);

      const button = wrapper.find('button.MuiButton-contained');
      expect(button).toHaveLength(1);
    });

    test('should each render with size', () => {
      variants.forEach((variant) => {
        // default color
        const wrapper = mount(<Button variant={variant}>{ DEFAULT_BTN_TXT }</Button>);
        const button = wrapper.find('button');
        expect(button.hasClass(`MuiButton-${variant}`)).toEqual(true);
        expect(toJson(wrapper)).toMatchSnapshot();

        // sizes
        sizes.forEach((size) => {
          const sizeWrapper = mount(<Button variant={variant} size={size}>{ DEFAULT_BTN_TXT }</Button>);
          const sizeButton = sizeWrapper.find('button');
          expect(sizeButton.hasClass(`MuiButton-size${capitalize(size)}`)).toEqual(true);
          expect(sizeButton.hasClass(`MuiButton-${variant}Size${capitalize(size)}`)).toEqual(true);
          expect(toJson(sizeWrapper)).toMatchSnapshot();
        });

        // themed colors
        themedColors.forEach((color) => {
          const themedColorWrapper = mount(<Button variant={variant} color={color}>{ DEFAULT_BTN_TXT }</Button>);
          const themedColorButton = themedColorWrapper.find('button');
          expect(themedColorButton.hasClass(`MuiButton-${variant}${capitalize(color)}`)).toEqual(true);
          expect(toJson(themedColorWrapper)).toMatchSnapshot();

          sizes.forEach((size) => {
            const sizeWrapper = mount(<Button variant={variant} color={color} size={size}>{ DEFAULT_BTN_TXT }</Button>);
            const sizeButton = sizeWrapper.find('button');
            expect(sizeButton.hasClass(`MuiButton-size${capitalize(size)}`)).toEqual(true);
            expect(sizeButton.hasClass(`MuiButton-${variant}Size${capitalize(size)}`)).toEqual(true);
            expect(toJson(sizeWrapper)).toMatchSnapshot();
          });
        });

        // intent colors
        intentColors.forEach((color) => {
          const intentColorWrapper = mount(<Button variant={variant} color={color}>{ DEFAULT_BTN_TXT }</Button>);
          const intentColorButton = intentColorWrapper.find('button');
          const regex = new RegExp(`makeStyles-${variant}${capitalize(color)}-\\d+`);
          expect(intentColorButton.hasClass(regex)).toEqual(true);
          expect(toJson(intentColorWrapper)).toMatchSnapshot();

          sizes.forEach((size) => {
            const sizeWrapper = mount(<Button variant={variant} color={color} size={size}>{ DEFAULT_BTN_TXT }</Button>);
            const sizeButton = sizeWrapper.find('button');
            expect(sizeButton.hasClass(`MuiButton-size${capitalize(size)}`)).toEqual(true);
            expect(sizeButton.hasClass(`MuiButton-${variant}Size${capitalize(size)}`)).toEqual(true);
            expect(toJson(sizeWrapper)).toMatchSnapshot();
          });
        });
      });
    });
  });

});
