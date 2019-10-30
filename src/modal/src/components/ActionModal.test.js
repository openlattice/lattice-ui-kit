import React from 'react';

import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { RequestStates } from 'redux-reqseq';

import ActionModal from './ActionModal';
import Modal from './Modal';
import { PrimaryButton, SecondaryButton } from './ModalFooter';
import { CloseButton } from './ModalHeader';
import { nope } from '../../../utils/testing/MockUtils';

const CANCEL_TXT = 'No, cancel';
const CONFIRM_TXT = 'Yes, confirm';
const TITLE_TXT = 'Action Action Action';

const RS_COMPONENTS = {
  STANDBY: (
    <span>Are you absolutely sure you want to take this action?</span>
  ),
  SUCCESS: (
    <span>Success! The action has been taken.</span>
  ),
  FAILURE: (
    <span>Action failed. Please try again.</span>
  ),
};

describe('ActionModal', () => {

  const mockAddEventListenerMap = {};
  document.addEventListener = jest.fn((event, cb) => {
    mockAddEventListenerMap[event] = cb;
  });

  const mockRemoveEventListenerMap = {};
  document.removeEventListener = jest.fn((event, cb) => {
    mockRemoveEventListenerMap[event] = cb;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('snapshots', () => {

    test('should match snapshot when isVisible="false"', () => {
      const wrapper = mount(
        <ActionModal
            isVisible={false}
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="STANDBY"', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.STANDBY}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="PENDING"', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.PENDING}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="SUCCESS"', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.SUCCESS}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="FAILURE"', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.FAILURE}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="STANDBY" with requestStateComponents', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.STANDBY}
            requestStateComponents={RS_COMPONENTS}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="PENDING" with requestStateComponents', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.PENDING}
            requestStateComponents={RS_COMPONENTS}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="SUCCESS" with requestStateComponents', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.SUCCESS}
            requestStateComponents={RS_COMPONENTS}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when requestState="FAILURE" with requestStateComponents', () => {
      const wrapper = mount(
        <ActionModal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            requestState={RequestStates.FAILURE}
            requestStateComponents={RS_COMPONENTS}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    describe('children', () => {

      test('should include all children in the render tree', () => {
        const children = (
          <div id="test-id">
            <h2>
              heading
            </h2>
            <ul className="list">
              <li>
                one
              </li>
            </ul>
            <p>
              this is a paragraph
            </p>
            <button type="button">
              clicky 1
            </button>
          </div>
        );
        const wrapper = shallow(
          <ActionModal isVisible onClose={nope}>
            { children }
          </ActionModal>
        );
        expect(wrapper.contains(children)).toEqual(true);
      });

    });

    describe('isVisible', () => {

      test('should open the modal', () => {
        const wrapper = shallow(
          <ActionModal isVisible onClose={nope} />
        );
        expect(wrapper.prop('isVisible')).toEqual(true);
        expect(wrapper.dive().type()).not.toBeNull();
      });

      test('should close the modal', () => {
        const wrapper = shallow(
          <ActionModal isVisible={false} onClose={nope} />
        );
        expect(wrapper.props()).toEqual({});
        expect(wrapper.type()).toBeNull();
      });

      test('should toggle visibility', () => {
        const wrapper = shallow(
          <ActionModal isVisible={false} onClose={nope} />
        );
        expect(wrapper.props()).toEqual({});
        expect(wrapper.type()).toBeNull();
        wrapper.setProps({ isVisible: true });
        expect(wrapper.prop('isVisible')).toEqual(true);
        expect(wrapper.dive().type()).not.toBeNull();
        wrapper.setProps({ isVisible: false });
        expect(wrapper.props()).toEqual({});
        expect(wrapper.type()).toBeNull();
      });

    });

    describe('onClickPrimary', () => {

      test('should invoke onClickPrimary handler when clicking the primary button', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClickPrimary={mockOnClick} onClose={nope} />
        );
        wrapper.find(PrimaryButton).find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('onClickSecondary', () => {

      test('should invoke onClickSecondary handler when clicking the secondary button', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClickSecondary={mockOnClick} onClose={nope} />
        );
        wrapper.find(SecondaryButton).find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('onClose', () => {

      test('should invoke onClose handler when clicking the close (x) button', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClose={mockOnClose} />
        );
        wrapper.find(CloseButton).find('button').simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });

      test('should invoke onClose handler when clicking the secondary button', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClose={mockOnClose} />
        );
        wrapper.find(SecondaryButton).find('button').simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });

    });

    describe('requestState', () => {

      describe(RequestStates.STANDBY, () => {

        const wrapper = mount(
          <ActionModal isVisible onClose={nope} requestState={RequestStates.STANDBY} />
        );

        test('should render correct primary button', () => {
          expect(wrapper.find(PrimaryButton).find('button').text()).toEqual('Confirm');
          expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(false);
        });

        test('should render correct secondary button', () => {
          expect(wrapper.find(SecondaryButton).find('button').text()).toEqual('Cancel');
          expect(wrapper.find(SecondaryButton).find('button').prop('disabled')).toEqual(false);
          expect(wrapper.find(SecondaryButton).prop('disabled')).toEqual(false);
          expect(wrapper.find(SecondaryButton).prop('isLoading')).toEqual(false);
        });

      });

      describe(RequestStates.PENDING, () => {

        const wrapper = mount(
          <ActionModal isVisible onClose={nope} requestState={RequestStates.PENDING} />
        );

        test('should render correct primary button', () => {
          expect(wrapper.find(PrimaryButton).find('button').text()).toEqual('Confirm');
          expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(true);
          expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(true);
          expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(true);
        });

        test('should render correct secondary button', () => {
          expect(wrapper.find(SecondaryButton).find('button').text()).toEqual('Cancel');
          expect(wrapper.find(SecondaryButton).find('button').prop('disabled')).toEqual(true);
          expect(wrapper.find(SecondaryButton).prop('disabled')).toEqual(true);
          expect(wrapper.find(SecondaryButton).prop('isLoading')).toEqual(false);
        });

      });

      describe(RequestStates.SUCCESS, () => {

        const wrapper = mount(
          <ActionModal isVisible onClose={nope} requestState={RequestStates.SUCCESS} />
        );

        test('should render correct primary button', () => {
          expect(wrapper.find(PrimaryButton).find('button').text()).toEqual('Close');
          expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(false);
        });

        test('should not render secondary button', () => {
          expect(wrapper.find(SecondaryButton)).toHaveLength(0);
        });

      });

      describe(RequestStates.FAILURE, () => {

        const wrapper = mount(
          <ActionModal isVisible onClose={nope} requestState={RequestStates.FAILURE} />
        );

        test('should render correct primary button', () => {
          expect(wrapper.find(PrimaryButton).find('button').text()).toEqual('Close');
          expect(wrapper.find(PrimaryButton).find('button').prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('disabled')).toEqual(false);
          expect(wrapper.find(PrimaryButton).prop('isLoading')).toEqual(false);
        });

        test('should not render secondary button', () => {
          expect(wrapper.find(SecondaryButton)).toHaveLength(0);
        });

      });

    });

    describe('textPrimary', () => {

      test('should set the primary button text (secondary button missing)', () => {
        const wrapper = mount(
          <ActionModal isVisible onClose={nope} textPrimary={CONFIRM_TXT} textSecondary="" />
        );
        expect(wrapper.find(PrimaryButton).find('button').text()).toEqual(CONFIRM_TXT);
      });

      test('should set the primary button text (secondary button visible)', () => {
        const wrapper = mount(
          <ActionModal isVisible onClose={nope} textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(PrimaryButton).find('button').text()).toEqual(CONFIRM_TXT);
      });

    });

    describe('textSecondary', () => {

      test('should set the secondary button text (primary button missing)', () => {
        const wrapper = mount(
          <ActionModal isVisible onClose={nope} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').text()).toEqual(CANCEL_TXT);
      });

      test('should set the secondary button text (primary button visible)', () => {
        const wrapper = mount(
          <ActionModal isVisible onClose={nope} textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT} />
        );
        expect(wrapper.find(SecondaryButton).find('button').text()).toEqual(CANCEL_TXT);
      });

    });

    describe('textTitle', () => {

      test('should set the modal title', () => {
        const wrapper = mount(
          <ActionModal isVisible onClose={nope} textTitle={TITLE_TXT} />
        );
        expect(wrapper.find('h1').first().text()).toEqual(TITLE_TXT);
      });

    });

    describe('shouldCloseOnSuccess', () => {

      test('should close modal when true', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClose={mockOnClose} requestState={RequestStates.SUCCESS} shouldCloseOnSuccess />
        );
        expect(mockOnClose).toHaveBeenCalledTimes(1);
        expect(wrapper.find(Modal)).toHaveLength(0);
      });

      test('should not close modal when false', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <ActionModal isVisible onClose={mockOnClose} shouldCloseOnSuccess={false} />
        );
        expect(mockOnClose).toHaveBeenCalledTimes(0);
        expect(wrapper.find(Modal)).toHaveLength(1);
      });

    });

  });

  describe('mounting', () => {

    test('should register "keydown" and "keyup" event listeners', () => {
      mount(
        <ActionModal isVisible onClose={nope} />
      );
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      expect(document.addEventListener).toHaveBeenCalledWith('keyup', expect.any(Function), false);
    });

    test('should unregister "keydown" and "keyup" event listeners', () => {
      const wrapper = mount(
        <ActionModal isVisible onClose={nope} />
      );
      wrapper.unmount();
      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keyup', expect.any(Function), false);
    });

  });

});
