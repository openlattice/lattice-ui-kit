import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Button from './Button';
import StyledButton from './styled/StyledButton';
import { nope } from '../../../utils/testing/MockUtils';

const DEFAULT_BTN_TXT = 'DEFAULT_BUTTON';
const PRIMARY_BTN_TXT = 'PRIMARY_BUTTON';
const SECONDARY_BTN_TXT = 'SECONDARY_BUTTON';
const SUBTLE_BTN_TXT = 'SUBTLE_BUTTON';

describe('button', () => {

  describe('mode="default"', () => {

    const basicBtn1 = mount(
      <Button onClick={nope}>
        { DEFAULT_BTN_TXT }
      </Button>
    );
    const basicBtn2 = mount(
      <Button mode="default" onClick={nope}>
        { DEFAULT_BTN_TXT }
      </Button>
    );

    test('should match snapshot', () => {
      expect(toJson(basicBtn1)).toMatchSnapshot();
      expect(toJson(basicBtn2)).toMatchSnapshot();
    });

    test('should render StyledButton component', () => {
      expect(basicBtn1.find(StyledButton)).toHaveLength(1);
      expect(basicBtn2.find(StyledButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      expect(basicBtn1.find('button')).toHaveLength(1);
      expect(basicBtn2.find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(basicBtn1.text()).toEqual(DEFAULT_BTN_TXT);
      expect(basicBtn2.text()).toEqual(DEFAULT_BTN_TXT);
    });

    describe('isLoading', () => {
      test('should render loading spinner', () => {
        const wrapper = mount(<Button isLoading />);
        expect(wrapper.find('Spinner')).toHaveLength(1);
      });

      test('should set content opacity to 0', () => {
        const wrapper = mount(<Button isLoading />);
        expect(wrapper.find('Content')).toHaveStyleRule('opacity', '0');
      });
    });

    describe('disabled', () => {

      const disabledBtn1 = mount(
        <Button disabled onClick={nope}>
          { DEFAULT_BTN_TXT }
        </Button>
      );
      const disabledBtn2 = mount(
        <Button disabled mode="default" onClick={nope}>
          { DEFAULT_BTN_TXT }
        </Button>
      );

      test('should set "disabled" attribute to true', () => {
        expect(disabledBtn1.prop('disabled')).toEqual(true);
        expect(disabledBtn2.prop('disabled')).toEqual(true);
        expect(disabledBtn1.find('button').get(0).props.disabled).toEqual(true);
        expect(disabledBtn2.find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        expect(basicBtn1.prop('disabled')).toEqual(false);
        expect(basicBtn2.prop('disabled')).toEqual(false);
        expect(basicBtn1.find('button').get(0).props.disabled).toEqual(false);
        expect(basicBtn2.find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {
        const mockOnClick1 = jest.fn();
        const mockOnClick2 = jest.fn();
        const btn1 = shallow(
          <Button onClick={mockOnClick1}>
            { DEFAULT_BTN_TXT }
          </Button>
        );
        const btn2 = shallow(
          <Button mode="default" onClick={mockOnClick2}>
            { DEFAULT_BTN_TXT }
          </Button>
        );
        btn1.simulate('click');
        btn2.simulate('click');
        expect(mockOnClick1).toHaveBeenCalledTimes(1);
        expect(mockOnClick2).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('mode="primary"', () => {

    const basicBtn = mount(
      <Button mode="primary" onClick={nope}>
        { PRIMARY_BTN_TXT }
      </Button>
    );

    test('should match snapshot', () => {
      expect(toJson(basicBtn)).toMatchSnapshot();
    });

    test('should render StyledButton component', () => {
      expect(basicBtn.find(StyledButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      expect(basicBtn.find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(basicBtn.text()).toEqual(PRIMARY_BTN_TXT);
    });

    describe('isLoading', () => {
      test('should render loading spinner', () => {
        const wrapper = mount(<Button mode="primary" isLoading />);
        expect(wrapper.find('Spinner')).toHaveLength(1);
      });

      test('should set content opacity to 0', () => {
        const wrapper = mount(<Button mode="primary" isLoading />);
        expect(wrapper.find('Content')).toHaveStyleRule('opacity', '0');
      });
    });

    describe('disabled', () => {

      const disabledBtn = mount(
        <Button disabled mode="primary" onClick={nope}>
          { DEFAULT_BTN_TXT }
        </Button>
      );

      test('should set "disabled" attribute to true', () => {
        expect(disabledBtn.prop('disabled')).toEqual(true);
        expect(disabledBtn.find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        expect(basicBtn.prop('disabled')).toEqual(false);
        expect(basicBtn.find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {
        const mockOnClick = jest.fn();
        const btn = mount(
          <Button mode="primary" onClick={mockOnClick}>
            { PRIMARY_BTN_TXT }
          </Button>
        );
        btn.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('mode="secondary"', () => {

    const basicBtn = mount(
      <Button mode="secondary" onClick={nope}>
        { SECONDARY_BTN_TXT }
      </Button>
    );

    test('should match snapshot', () => {
      expect(toJson(basicBtn)).toMatchSnapshot();
    });

    test('should render StyledButton component', () => {
      expect(basicBtn.find(StyledButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      expect(basicBtn.find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(basicBtn.text()).toEqual(SECONDARY_BTN_TXT);
    });

    describe('isLoading', () => {
      test('should render loading spinner', () => {
        const wrapper = mount(<Button mode="secondary" isLoading />);
        expect(wrapper.find('Spinner')).toHaveLength(1);
      });

      test('should set content opacity to 0', () => {
        const wrapper = mount(<Button mode="secondary" isLoading />);
        expect(wrapper.find('Content')).toHaveStyleRule('opacity', '0');
      });
    });

    describe('disabled', () => {

      const disabledBtn = mount(
        <Button disabled mode="secondary" onClick={nope}>
          { SECONDARY_BTN_TXT }
        </Button>
      );

      test('should set "disabled" attribute to true', () => {
        expect(disabledBtn.prop('disabled')).toEqual(true);
        expect(disabledBtn.find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        expect(basicBtn.prop('disabled')).toEqual(false);
        expect(basicBtn.find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {
        const mockOnClick = jest.fn();
        const btn = mount(
          <Button mode="secondary" onClick={mockOnClick}>
            { SECONDARY_BTN_TXT }
          </Button>
        );
        btn.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('mode="subtle"', () => {

    const basicBtn = mount(
      <Button mode="subtle" onClick={nope}>
        { SUBTLE_BTN_TXT }
      </Button>
    );

    test('should match snapshot', () => {
      expect(toJson(basicBtn)).toMatchSnapshot();
    });

    test('should render StyledButton component', () => {
      expect(basicBtn.find(StyledButton)).toHaveLength(1);
    });

    test('should render a button element', () => {
      expect(basicBtn.find('button')).toHaveLength(1);
    });

    test('should render the correct text', () => {
      expect(basicBtn.text()).toEqual(SUBTLE_BTN_TXT);
    });

    describe('isLoading', () => {
      test('should render loading spinner', () => {
        const wrapper = mount(<Button mode="subtle" isLoading />);
        expect(wrapper.find('Spinner')).toHaveLength(1);
      });

      test('should set content opacity to 0', () => {
        const wrapper = mount(<Button mode="subtle" isLoading />);
        expect(wrapper.find('Content')).toHaveStyleRule('opacity', '0');
      });
    });

    describe('disabled', () => {

      const disabledBtn = mount(
        <Button disabled mode="subtle" onClick={nope}>
          { SUBTLE_BTN_TXT }
        </Button>
      );

      test('should set "disabled" attribute to true', () => {
        expect(disabledBtn.prop('disabled')).toEqual(true);
        expect(disabledBtn.find('button').get(0).props.disabled).toEqual(true);
      });

      test('should set "disabled" attribute to false', () => {
        expect(basicBtn.prop('disabled')).toEqual(false);
        expect(basicBtn.find('button').get(0).props.disabled).toEqual(false);
      });

    });

    describe('onClick()', () => {

      test('should invoke onClick handler', () => {
        const mockOnClick = jest.fn();
        const btn = mount(
          <Button mode="subtle" onClick={mockOnClick}>
            { SUBTLE_BTN_TXT }
          </Button>
        );
        btn.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

  });

});
