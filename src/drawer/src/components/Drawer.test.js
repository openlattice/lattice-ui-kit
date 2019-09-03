import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Drawer from './Drawer';
import MenuList from '../../stories/components/MenuList';

describe('Drawer', () => {
  describe('snapshots', () => {
    test('isOpen = false', () => {
      const wrapper = mount(<Drawer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('isOpen = true', () => {
      const wrapper = mount(<Drawer isOpen />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('props', () => {

    describe('isOpen', () => {
      test('should set Overlay isVisible to true when isOpen=true', () => {
        const wrapper = mount(<Drawer isOpen />);
        expect(wrapper.find('Overlay').prop('isVisible')).toEqual(true);
      });

      test('should set Overlay isVisible to false by default', () => {
        const wrapper = mount(<Drawer />);
        expect(wrapper.find('Overlay').prop('isVisible')).toEqual(false);
      });

      test('should set Overlay isVisible to false when isOpen=false', () => {
        const wrapper = mount(<Drawer isOpen={false} />);
        expect(wrapper.find('Overlay').prop('isVisible')).toEqual(false);
      });
    });

    describe('onClose', () => {

      test('should invoke onClose when clicking on overlay', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Drawer onClose={mockOnClose} isOpen />);

        const overlayWrapper = wrapper.find('Overlay');
        expect(overlayWrapper.prop('onClose')).toEqual(mockOnClose);

        expect(mockOnClose).toHaveBeenCalledTimes(0);
        overlayWrapper.find('OverlayInnerContainer').simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('shouldCloseOnOutsideClick', () => {
      test('should not invoke onClose when shouldCloseOnOutsideClick=true', () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(
          <Drawer
              onClose={mockOnClose}
              isOpen
              shouldCloseOnOutsideClick={false} />
        );

        const overlayWrapper = wrapper.find('Overlay');
        expect(overlayWrapper.prop('onClose')).toEqual(mockOnClose);

        expect(mockOnClose).toHaveBeenCalledTimes(0);
        overlayWrapper.find('OverlayInnerContainer').simulate('click');
        expect(mockOnClose).toHaveBeenCalledTimes(0);
      });
    });

    describe('side', () => {

      test('should set to "left" by default', () => {
        const wrapper = mount(<Drawer isOpen />);
        const drawerCardWrapper = wrapper.find('DrawerCard');

        expect(drawerCardWrapper.prop('side')).toEqual('left');
        expect(drawerCardWrapper).toHaveStyleRule('left', '0');
      });

      test('should render DrawerCard on right when side="right"', () => {
        const wrapper = mount(<Drawer isOpen side="right" />);
        const drawerCardWrapper = wrapper.find('DrawerCard');

        expect(drawerCardWrapper.prop('side')).toEqual('right');
        expect(drawerCardWrapper).toHaveStyleRule('right', '0');
      });

    });

    describe('children', () => {
      test('should render children inside DrawerCard', () => {
        const wrapper = mount(
          <Drawer isOpen>
            <MenuList />
          </Drawer>
        );

        const drawerCardWrapper = wrapper.find('DrawerCard');
        expect(drawerCardWrapper.contains(MenuList)).toEqual(true);
      });
    });

  });

});
