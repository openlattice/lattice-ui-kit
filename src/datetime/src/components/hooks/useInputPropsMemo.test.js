// @flow
import React from 'react';
import { mount } from 'enzyme';
import { DateTime } from 'luxon';

import useInputPropsMemo from './useInputPropsMemo';

type Props = {
  lastValidDate :any;
  setSelectedDate :(date :any) => void;
}

const MockComponent = (props :Props) => {
  const { lastValidDate, setSelectedDate } = props;
  const { onKeyDown, onBlur } = useInputPropsMemo(lastValidDate, setSelectedDate);

  return (
    <input onKeyDown={onKeyDown} onBlur={onBlur} />
  );
};

describe('useInputPropsMemo', () => {
  describe('onKeyDown', () => {
    test('should have onKeyDown function', () => {
      const lastValidDate = DateTime.local();
      const mockSetSelectedDate = jest.fn();
      const wrapper = mount(
        <MockComponent lastValidDate={lastValidDate} setSelectedDate={mockSetSelectedDate} />
      );

      expect(typeof wrapper.find('input').prop('onKeyDown')).toEqual('function');
    });

    test('input should preventDefault only for Enter keyPress', () => {
      const lastValidDate = DateTime.local();
      const mockSetSelectedDate = jest.fn();
      const preventDefault = jest.fn();
      const wrapper = mount(
        <MockComponent lastValidDate={lastValidDate} setSelectedDate={mockSetSelectedDate} />
      );
      const input = wrapper.find('input');

      expect(preventDefault).toHaveBeenCalledTimes(0);

      input.simulate('keyDown', {
        preventDefault,
        key: 'Enter'
      });

      expect(preventDefault).toHaveBeenCalledTimes(1);

      input.simulate('keyDown', {
        preventDefault,
        key: 'Escape'
      });

      expect(preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe('onBlur', () => {
    test('should have onBlur function', () => {
      const lastValidDate = DateTime.local();
      const mockSetSelectedDate = jest.fn();
      const wrapper = mount(
        <MockComponent lastValidDate={lastValidDate} setSelectedDate={mockSetSelectedDate} />
      );

      expect(typeof wrapper.find('input').prop('onBlur')).toEqual('function');
    });

    test('onBlur should invoke setSelectedDate with lastValidDate as arg', () => {
      const lastValidDate = DateTime.local();
      const mockSetSelectedDate = jest.fn();
      const wrapper = mount(
        <MockComponent lastValidDate={lastValidDate} setSelectedDate={mockSetSelectedDate} />
      );

      const input = wrapper.find('input');
      input.simulate('blur');
      expect(mockSetSelectedDate.mock.calls[0][0]).toEqual(lastValidDate);
    });
  });
});
