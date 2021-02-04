import toJson from 'enzyme-to-json';
import { Menu, MenuItem } from '@material-ui/core';
import { mount } from 'enzyme';

import NestedMenuItem from './NestedMenuItem';

const options = ['Option 1'];

describe('NestedMenuItem', () => {
  const defaultProps = {
    open: false,
    anchorEl: () => document.createElement('div'),
  };

  test('should match snapshot', () => {
    const wrapper = mount(
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      <Menu {...defaultProps}>
        <NestedMenuItem label="Option 1">
          {options.map((option) => (
            <MenuItem
                key={`nested-${option}`}>
              {`Nested ${option}`}
            </MenuItem>
          ))}
        </NestedMenuItem>
      </Menu>
    );

    wrapper.setProps({
      open: true
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('event callbacks', () => {
    describe('enter', () => {
      test('should fire callback', () => {
        const mockHandleEnter = jest.fn();
        const wrapper = mount(
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          <Menu {...defaultProps}>
            <NestedMenuItem
                ContainerProps={{
                  onMouseEnter: mockHandleEnter
                }}
                label="Option 1">
              {options.map((option) => (
                <MenuItem
                    key={`nested-${option}`}>
                  {`Nested ${option}`}
                </MenuItem>
              ))}
            </NestedMenuItem>
          </Menu>
        );

        wrapper.setProps({
          open: true
        });

        wrapper.update();

        const nestedMenuItem = wrapper.find(NestedMenuItem);

        expect(mockHandleEnter).toHaveBeenCalledTimes(0);
        nestedMenuItem.simulate('mouseenter');
        expect(mockHandleEnter).toHaveBeenCalledTimes(1);
      });
    });

    describe('exit', () => {
      test('should fire callback', () => {
        const mockHandleLeave = jest.fn();
        const wrapper = mount(
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          <Menu {...defaultProps}>
            <NestedMenuItem
                ContainerProps={{
                  onMouseLeave: mockHandleLeave
                }}
                label="Option 1">
              {options.map((option) => (
                <MenuItem
                    key={`nested-${option}`}>
                  {`Nested ${option}`}
                </MenuItem>
              ))}
            </NestedMenuItem>
          </Menu>
        );

        wrapper.setProps({
          open: true
        });

        wrapper.update();

        const nestedMenuItem = wrapper.find(NestedMenuItem);

        expect(mockHandleLeave).toHaveBeenCalledTimes(0);
        nestedMenuItem.simulate('mouseleave');
        expect(mockHandleLeave).toHaveBeenCalledTimes(1);
      });
    });

    describe('focus', () => {
      test('should fire callback', () => {
        const mockOnFocus = jest.fn();
        const wrapper = mount(
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          <Menu {...defaultProps}>
            <NestedMenuItem
                ContainerProps={{
                  onFocus: mockOnFocus
                }}
                label="Option 1">
              {options.map((option) => (
                <MenuItem
                    key={`nested-${option}`}>
                  {`Nested ${option}`}
                </MenuItem>
              ))}
            </NestedMenuItem>
          </Menu>
        );

        wrapper.setProps({
          open: true
        });

        wrapper.update();

        const nestedMenuItem = wrapper.find(NestedMenuItem);

        expect(mockOnFocus).toHaveBeenCalledTimes(0);
        nestedMenuItem.simulate('focus');
        expect(mockOnFocus).toHaveBeenCalledTimes(1);
      });
    });
  });
});
