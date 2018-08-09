import 'jest-styled-components';

import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Button from './Button';
import DefaultButton from './styled/DefaultButton';
import PrimaryButton from './styled/PrimaryButton';
import SecondaryButton from './styled/SecondaryButton';
import { genRandomString, nope } from '../../../utils/testing/MockUtils';

const DEFAULT_BTN_TXT = 'DEFAULT_BUTTON';
const PRIMARY_BTN_TXT = 'PRIMARY_BUTTON';
const SECONDARY_BTN_TXT = 'SECONDARY_BUTTON';

describe('Button', () => {

  describe('mode="default"', () => {

    test('should match snapshot', () => {
      const wrapper1 = mount(
        <Button onClick={nope}>
          { DEFAULT_BTN_TXT }
        </Button>
      );
      const wrapper2 = mount(
        <Button mode="default" onClick={nope}>
          { DEFAULT_BTN_TXT }
        </Button>
      );
      expect(toJson(wrapper1)).toMatchSnapshot();
      expect(toJson(wrapper2)).toMatchSnapshot();
    });

    test('should render DefaultButton component', () => {
      const wrapper1 = shallow(
        <Button onClick={nope}>
          { genRandomString() }
        </Button>
      );
      const wrapper2 = shallow(
        <Button mode="default" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper1.type()).toEqual(DefaultButton);
      expect(wrapper2.type()).toEqual(DefaultButton);
      expect(wrapper1.find(DefaultButton)).toHaveLength(1);
      expect(wrapper2.find(DefaultButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      const wrapper1 = shallow(
        <Button onClick={nope}>
          { genRandomString() }
        </Button>
      );
      const wrapper2 = shallow(
        <Button mode="default" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper1.dive().type()).toEqual('button');
      expect(wrapper2.dive().type()).toEqual('button');
      expect(wrapper1.dive().find('button')).toHaveLength(1);
      expect(wrapper2.dive().find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      const text = genRandomString();
      const wrapper1 = shallow(
        <Button onClick={nope}>
          { text }
        </Button>
      );
      const wrapper2 = shallow(
        <Button mode="default" onClick={nope}>
          { text }
        </Button>
      );
      expect(wrapper1.dive().text()).toEqual(text);
      expect(wrapper2.dive().text()).toEqual(text);
    });

    describe('disabled', () => {

      test('should set "disabled" attribute to true', () => {
        const wrapper1 = shallow(
          <Button disabled onClick={nope}>
            { genRandomString() }
          </Button>
        );
        const wrapper2 = shallow(
          <Button disabled mode="default" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper1.prop('disabled')).toEqual(true);
        expect(wrapper2.prop('disabled')).toEqual(true);
        expect(wrapper1.dive().find('button').get(0).props.disabled).toEqual(true);
        expect(wrapper2.dive().find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        const wrapper1 = shallow(
          <Button onClick={nope}>
            { genRandomString() }
          </Button>
        );
        const wrapper2 = shallow(
          <Button mode="default" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper1.prop('disabled')).toEqual(false);
        expect(wrapper2.prop('disabled')).toEqual(false);
        expect(wrapper1.dive().find('button').get(0).props.disabled).toEqual(false);
        expect(wrapper2.dive().find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {
        const mockOnClick1 = jest.fn();
        const mockOnClick2 = jest.fn();
        const wrapper1 = shallow(
          <Button onClick={mockOnClick1}>
            { genRandomString() }
          </Button>
        );
        const wrapper2 = shallow(
          <Button mode="default" onClick={mockOnClick2}>
            { genRandomString() }
          </Button>
        );
        wrapper1.simulate('click');
        wrapper2.simulate('click');
        expect(mockOnClick1).toHaveBeenCalledTimes(1);
        expect(mockOnClick2).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('mode="primary"', () => {

    test('should match snapshot', () => {
      const wrapper = mount(
        <Button mode="primary" onClick={nope}>
          { PRIMARY_BTN_TXT }
        </Button>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render PrimaryButton component', () => {
      const wrapper = shallow(
        <Button mode="primary" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper.type()).toEqual(PrimaryButton);
      expect(wrapper.find(PrimaryButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      const wrapper = shallow(
        <Button mode="primary" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper.dive().type()).toEqual('button');
      expect(wrapper.dive().find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      const text = genRandomString();
      const wrapper = shallow(
        <Button mode="primary" onClick={nope}>
          { text }
        </Button>
      );
      expect(wrapper.dive().text()).toEqual(text);
    });

    describe('disabled', () => {

      test('should set "disabled" attribute to true', () => {
        const wrapper = shallow(
          <Button disabled mode="primary" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper.prop('disabled')).toEqual(true);
        expect(wrapper.dive().find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        const wrapper = shallow(
          <Button mode="primary" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper.prop('disabled')).toEqual(false);
        expect(wrapper.dive().find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {

        const mockOnClick = jest.fn();
        const wrapper = mount(
          <Button mode="primary" onClick={mockOnClick}>
            { genRandomString() }
          </Button>
        );
        wrapper.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('mode="secondary"', () => {

    test('should match snapshot', () => {
      const wrapper = mount(
        <Button mode="secondary" onClick={nope}>
          { SECONDARY_BTN_TXT }
        </Button>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render SecondaryButton component', () => {
      const wrapper = shallow(
        <Button mode="secondary" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper.type()).toEqual(SecondaryButton);
      expect(wrapper.find(SecondaryButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      const wrapper = shallow(
        <Button mode="secondary" onClick={nope}>
          { genRandomString() }
        </Button>
      );
      expect(wrapper.dive().type()).toEqual('button');
      expect(wrapper.dive().find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      const text = genRandomString();
      const wrapper = shallow(
        <Button mode="secondary" onClick={nope}>
          { text }
        </Button>
      );
      expect(wrapper.dive().text()).toEqual(text);
    });

    describe('disabled', () => {

      test('should set "disabled" attribute to true', () => {
        const wrapper = shallow(
          <Button disabled mode="secondary" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper.prop('disabled')).toEqual(true);
        expect(wrapper.dive().find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        const wrapper = shallow(
          <Button mode="secondary" onClick={nope}>
            { genRandomString() }
          </Button>
        );
        expect(wrapper.prop('disabled')).toEqual(false);
        expect(wrapper.dive().find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {

        const mockOnClick = jest.fn();
        const wrapper = mount(
          <Button mode="secondary" onClick={mockOnClick}>
            { genRandomString() }
          </Button>
        );
        wrapper.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

  });

});
