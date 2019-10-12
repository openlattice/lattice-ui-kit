import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Overlay from './Overlay';
import { OverlayOuterContainer } from './styled/StyledOverlayComponents';
import { nope } from '../../../utils/testing/MockUtils';

const MOCK_CHILD = (
  <span>
    hello
  </span>
);

describe('overlay', () => {

  const mVisibleOverlay = mount(
    <Overlay isVisible onClose={nope}>
      { MOCK_CHILD }
    </Overlay>
  );

  const mHiddenOverlay = mount(
    <Overlay isVisible={false} onClose={nope}>
      { MOCK_CHILD }
    </Overlay>
  );

  describe('snapshots', () => {

    test('should match snapshot when isVisible="true"', () => {
      expect(toJson(mVisibleOverlay)).toMatchSnapshot();
    });

    test('should match snapshot when isVisible="false"', () => {
      expect(toJson(mHiddenOverlay)).toMatchSnapshot();
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
          <Overlay isVisible>
            { children }
          </Overlay>
        );
        expect(wrapper.contains(children)).toEqual(true);
      });

    });

    describe('isVisible', () => {

      test('should show the overlay', () => {
        expect(mVisibleOverlay.children()).toHaveLength(1);
        expect(mVisibleOverlay.html()).not.toBeNull();
        expect(mVisibleOverlay.prop('isVisible')).toEqual(true);
      });

      test('should hide the overlay', () => {
        expect(mHiddenOverlay.children()).toHaveLength(0);
        expect(mHiddenOverlay.html()).toBeNull();
        expect(mHiddenOverlay.prop('isVisible')).toEqual(false);
      });

    });

    describe('onClose', () => {

      test('should invoke onClick handler when clicking on the overlay', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
          <Overlay isVisible onClose={mockOnClick}>
            { MOCK_CHILD }
          </Overlay>
        );
        wrapper.find('div').last().simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

    });

    describe('shouldCloseOnClick', () => {

      test('should close when set to true', () => {
        const overlay = mount(
          <Overlay isVisible shouldCloseOnClick>
            { MOCK_CHILD }
          </Overlay>
        );
        const instance = overlay.instance();
        const closeSpy = jest.spyOn(instance, 'close');
        instance.forceUpdate();
        overlay.find('div').last().simulate('click');
        expect(closeSpy).toHaveBeenCalledTimes(1);
      });

      test('should not close when set to false', () => {
        const overlay = mount(
          <Overlay isVisible shouldCloseOnClick={false}>
            { MOCK_CHILD }
          </Overlay>
        );
        const instance = overlay.instance();
        const closeSpy = jest.spyOn(instance, 'close');
        instance.forceUpdate();

        overlay.find('div').last().simulate('click');
        expect(closeSpy).toHaveBeenCalledTimes(0);
      });

    });

    describe('transparent', () => {
      test('should set overlay background-color to transparent', () => {
        const wrapper = mount(
          <Overlay isVisible shouldCloseOnClick transparent>
            { MOCK_CHILD }
          </Overlay>
        );

        expect(wrapper.find(OverlayOuterContainer)).toHaveStyleRule('background-color', 'transparent');
      });
    });

  });

});
