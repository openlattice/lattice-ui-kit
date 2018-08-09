import 'jest-styled-components';

import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Modal from './Modal';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { nope } from '../../../utils/testing/MockUtils';

const CANCEL_TXT = 'Cancel';
const CONFIRM_TXT = 'Confirm';
const TITLE_TXT = 'Title';

const MOCK_CHILD = (
  <span>
    hello
  </span>
);

const MOCK_COMPONENT = () => (
  <div>
    <h1>
      component
    </h1>
    <button type="button">
      clicky
    </button>
  </div>
);

describe('modal', () => {

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

    test('should match snapshot when isVisible="true"', () => {
      const wrapper = mount(
        <Modal
            isVisible
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT}>
          { MOCK_CHILD }
        </Modal>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when isVisible="false"', () => {
      const wrapper = mount(
        <Modal
            isVisible={false}
            onClose={nope}
            onClickPrimary={nope}
            onClickSecondary={nope}
            textPrimary={CONFIRM_TXT}
            textSecondary={CANCEL_TXT}
            textTitle={TITLE_TXT}>
          { MOCK_CHILD }
        </Modal>
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
          <Modal isVisible onClose={nope}>
            { children }
          </Modal>
        );
        expect(wrapper.contains(children)).toEqual(true);
      });

    });

    describe('isVisible', () => {

      test('should show the modal', () => {
        const wrapper = shallow(
          <Modal isVisible onClose={nope}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.prop('isVisible')).toEqual(true);
        expect(wrapper.dive().type()).not.toBeNull();
      });

      test('should hide the modal', () => {
        const wrapper = shallow(
          <Modal isVisible={false} onClose={nope}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.props()).toEqual({});
        expect(wrapper.type()).toBeNull();
      });

      test('should toggle visibility', () => {
        const wrapper = shallow(
          <Modal isVisible={false} onClose={nope}>
            { MOCK_CHILD }
          </Modal>
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
          <Modal isVisible onClickPrimary={mockOnClick} onClose={nope} textPrimary={CONFIRM_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        wrapper.find('button').last().simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('onClickSecondary', () => {

      test('should invoke onClickSecondary handler when clicking the secondary button', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <Modal isVisible onClickSecondary={mockOnClick} onClose={nope} textSecondary={CANCEL_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        wrapper.find('button').last().simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('onClose', () => {

      test('should invoke onClose handler when clicking the close (x) button', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <Modal isVisible onClose={mockOnClose}>
            { MOCK_CHILD }
          </Modal>
        );
        wrapper.find('button').last().simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });

      test('should invoke onClose handler when clicking the secondary button', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <Modal isVisible onClose={mockOnClose} textSecondary={CANCEL_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        wrapper.find('button').last().simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });

    });

    describe('shouldCloseOnEscape', () => {

      test('should close modal when shouldCloseOnEscape="true"', () => {
        const mockOnClose = jest.fn();
        shallow(
          <Modal isVisible onClose={mockOnClose} shouldCloseOnEscape>
            { MOCK_CHILD }
          </Modal>
        );
        mockAddEventListenerMap.keydown({ key: 'Escape', code: 'Escape' });
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });

      test('should not close modal when shouldCloseOnEscape="false"', () => {
        const mockOnClose = jest.fn();
        shallow(
          <Modal isVisible onClose={mockOnClose} shouldCloseOnEscape={false}>
            { MOCK_CHILD }
          </Modal>
        );
        mockAddEventListenerMap.keydown({ key: 'Escape', code: 'Escape' });
        expect(mockOnClose).toHaveBeenCalledTimes(0);
      });

    });

    describe('textPrimary', () => {

      test('should set the primary button text (secondary button missing)', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} textPrimary={CONFIRM_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.find('button').last().text()).toEqual(CONFIRM_TXT);
      });

      test('should set the primary button text (secondary button visible)', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.find('button').at(1).text()).toEqual(CONFIRM_TXT);
      });

    });

    describe('textSecondary', () => {

      test('should set the secondary button text (primary button missing)', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} textSecondary={CANCEL_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.find('button').last().text()).toEqual(CANCEL_TXT);
      });

      test('should set the secondary button text (primary button visible)', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} textPrimary={CONFIRM_TXT} textSecondary={CANCEL_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.find('button').last().text()).toEqual(CANCEL_TXT);
      });

    });

    describe('textTitle', () => {

      test('should set the modal title', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} textTitle={TITLE_TXT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.find('h1').first().text()).toEqual(TITLE_TXT);
      });

    });

    describe('withFooter', () => {

      test('should render default footer component', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.contains(ModalFooter)).toEqual(true);
      });

      test('should render custom footer component', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} withFooter={MOCK_COMPONENT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.contains(MOCK_COMPONENT)).toEqual(true);
      });

      test('should not render a footer component when withFooter="false"', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} withFooter={false}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.prop('withFooter')).toEqual(false);
        expect(wrapper.find(ModalFooter).exists()).toEqual(false);
      });

    });

    describe('withHeader', () => {

      test('should render default header component', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.contains(ModalHeader)).toEqual(true);
      });

      test('should render custom header component', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} withHeader={MOCK_COMPONENT}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.contains(MOCK_COMPONENT)).toEqual(true);
      });

      test('should not render a header component when withHeader="false"', () => {
        const wrapper = mount(
          <Modal isVisible onClose={nope} withHeader={false}>
            { MOCK_CHILD }
          </Modal>
        );
        expect(wrapper.prop('withHeader')).toEqual(false);
        expect(wrapper.find(ModalHeader).exists()).toEqual(false);
      });

    });

  });

  describe('mounting', () => {

    test('should register "keydown" and "keyup" event listeners', () => {
      shallow(
        <Modal isVisible onClose={nope}>
          { MOCK_CHILD }
        </Modal>
      );
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      expect(document.addEventListener).toHaveBeenCalledWith('keyup', expect.any(Function), false);
    });

    test('should unregister "keydown" and "keyup" event listeners', () => {
      const wrapper = shallow(
        <Modal isVisible onClose={nope}>
          { MOCK_CHILD }
        </Modal>
      );
      wrapper.unmount();
      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keyup', expect.any(Function), false);
    });

  });

});
