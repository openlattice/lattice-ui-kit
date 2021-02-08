import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Map } from 'immutable';

import Result from './Result';
import {
  mockSearchResultsForPeople,
} from './constants';

describe('Result', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Result result={Map()} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('handleClick', () => {
    test('should call handleClick', () => {
      const mockResult = mockSearchResultsForPeople.first();
      const wrapper = mount(<Result result={mockResult} />);
      const instance = wrapper.instance();
      const handleClickSpy = jest.spyOn(instance, 'handleClick');

      instance.forceUpdate();
      wrapper.find(Result).simulate('click');

      expect(handleClickSpy).toHaveBeenCalledTimes(1);
    });

    test('should call onClick with result', () => {
      const mockResult = mockSearchResultsForPeople.first();
      const mockOnClick = jest.fn();
      const wrapper = mount(<Result result={mockResult} onClick={mockOnClick} />);

      wrapper.simulate('click');
      expect(mockOnClick).toHaveBeenCalledTimes(1);
      expect(mockOnClick.mock.calls[0][0]).toEqual(mockSearchResultsForPeople.first());
    });

  });
});
