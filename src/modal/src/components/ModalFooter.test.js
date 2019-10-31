import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import ModalFooter, { PrimaryButton, SecondaryButton } from './ModalFooter';
import { nope } from '../../../utils/testing/MockUtils';

const CANCEL_TXT = 'No, cancel';
const CONFIRM_TXT = 'Yes, confirm';

const MOCK_FOOTER = (
  <div>
    <span>footer</span>
    <button type="button">button 1</button>
    <button type="button">button 2</button>
  </div>
);

describe('ModalFooter', () => {

  describe('snapshots', () => {

    test('should match snapshot with primary button only', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary="" />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with secondary button only', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary=""
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with primary and secondary buttons', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with stretchy primary button', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            shouldStretchButtons
            textPrimary={CONFIRM_TXT}
            textSecondary="" />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with stretchy secondary button', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            shouldStretchButtons
            textPrimary=""
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with stretchy primary and secondary buttons', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            shouldStretchButtons
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with primary button disabled', () => {
      const wrapper = mount(
        <ModalFooter
            isDisabledPrimary
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with secondary button disabled', () => {
      const wrapper = mount(
        <ModalFooter
            isDisabledSecondary
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with primary button pending', () => {
      const wrapper = mount(
        <ModalFooter
            isPendingPrimary
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with secondary button pending', () => {
      const wrapper = mount(
        <ModalFooter
            isPendingSecondary
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot with custom footer', () => {
      const wrapper = mount(
        <ModalFooter
            onClickPrimary={nope}
            onClickSecondary={nope}
            withFooter={MOCK_FOOTER} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    describe('isDisabledPrimary', () => {

      test('should default to false', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(false);
        expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(false);
      });

      test('should be disabled', () => {
        const wrapper = mount(
          <ModalFooter isDisabledPrimary textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(true);
        expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(true);
      });

      test('should not be disabled', () => {
        const wrapper = mount(
          <ModalFooter isDisabledPrimary={false} textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(false);
        expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(false);
      });

    });

    describe('isDisabledSecondary', () => {

      test('should default to false', () => {
        const wrapper = mount(
          <ModalFooter textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').prop('disabled')).toEqual(false);
        expect(wrapper.find(SecondaryButton).prop('disabled')).toEqual(false);
      });

      test('should be disabled', () => {
        const wrapper = mount(
          <ModalFooter isDisabledSecondary textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').prop('disabled')).toEqual(true);
        expect(wrapper.find(SecondaryButton).prop('disabled')).toEqual(true);
      });

      test('should not be disabled', () => {
        const wrapper = mount(
          <ModalFooter isDisabledSecondary={false} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').prop('disabled')).toEqual(false);
        expect(wrapper.find(SecondaryButton).prop('disabled')).toEqual(false);
      });

    });

    describe('isPendingPrimary', () => {

      test('should default to false', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(false);
      });

      test('should be loading', () => {
        const wrapper = mount(
          <ModalFooter isPendingPrimary textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(true);
      });

      test('should not be loading', () => {
        const wrapper = mount(
          <ModalFooter isPendingPrimary={false} textPrimary={CONFIRM_TXT} />
        );
        expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(false);
      });

    });

    describe('isPendingSecondary', () => {

      test('should default to false', () => {
        const wrapper = mount(
          <ModalFooter textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).prop('isLoading')).toEqual(false);
      });

      test('should be loading', () => {
        const wrapper = mount(
          <ModalFooter isPendingSecondary textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).prop('isLoading')).toEqual(true);
      });

      test('should not be loading', () => {
        const wrapper = mount(
          <ModalFooter isPendingSecondary={false} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).prop('isLoading')).toEqual(false);
      });

    });

    describe('onClickPrimary', () => {

      test('should invoke onClickPrimary handler when clicking the primary button', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <ModalFooter onClickPrimary={mockOnClick} textPrimary={CONFIRM_TXT} />
        );
        wrapper.find(PrimaryButton).find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('onClickSecondary', () => {

      test('should invoke onClickSecondary handler when clicking the secondary button', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <ModalFooter onClickSecondary={mockOnClick} textSecondary={CANCEL_TXT} />
        );
        wrapper.find(SecondaryButton).find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('shouldStretchButtons', () => {

      test('should render stretchy buttons', () => {
        const wrapper = mount(
          <ModalFooter shouldStretchButtons textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(PrimaryButton)).toHaveStyleRule('flex', '1');
        expect(wrapper.find(SecondaryButton)).toHaveStyleRule('flex', '1');
      });

      test('should render non-stretchy buttons', () => {
        const wrapper = mount(
          <ModalFooter shouldStretchButtons={false} textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(PrimaryButton)).toHaveStyleRule('flex', 'none');
        expect(wrapper.find(SecondaryButton)).toHaveStyleRule('flex', 'none');
      });

      test('should render stretchy primary button', () => {
        const wrapper = mount(
          <ModalFooter shouldStretchButtons textPrimary={CONFIRM_TXT} textSecondary="" />
        );
        expect(wrapper.find(PrimaryButton)).toHaveStyleRule('flex', '1');
        expect(wrapper.find(SecondaryButton)).toHaveLength(0);
      });

      test('should render stretchy secondary button', () => {
        const wrapper = mount(
          <ModalFooter shouldStretchButtons textPrimary="" textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(PrimaryButton)).toHaveLength(0);
        expect(wrapper.find(SecondaryButton)).toHaveStyleRule('flex', '1');
      });

    });

    describe('textPrimary', () => {

      test('should set the primary button text (secondary button missing)', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary="" />
        );
        expect(wrapper.find(PrimaryButton).find('button').text()).toEqual(CONFIRM_TXT);
      });

      test('should set the primary button text (secondary button visible)', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(PrimaryButton).find('button').text()).toEqual(CONFIRM_TXT);
      });

    });

    describe('textSecondary', () => {

      test('should set the secondary button text (primary button missing)', () => {
        const wrapper = mount(
          <ModalFooter textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').text()).toEqual(CANCEL_TXT);
      });

      test('should set the secondary button text (primary button visible)', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').text()).toEqual(CANCEL_TXT);
      });

    });

    describe('withFooter', () => {

      test('should render default footer component', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.contains(ModalFooter)).toEqual(true);
      });

      test('should render custom footer component', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} withFooter={() => MOCK_FOOTER} />
        );
        expect(wrapper.contains(MOCK_FOOTER)).toEqual(true);
      });

      test('should render custom footer element', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} withFooter={MOCK_FOOTER} />
        );
        expect(wrapper.contains(MOCK_FOOTER)).toEqual(true);
      });

      test('should not render a footer component when withFooter="false"', () => {
        const wrapper = mount(
          <ModalFooter textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} withFooter={false} />
        );
        expect(wrapper.prop('withFooter')).toEqual(false);
        expect(wrapper.isEmptyRender()).toEqual(true);
      });

    });

  });

});
