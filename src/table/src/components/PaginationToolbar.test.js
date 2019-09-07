import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PaginationToolbar from './PaginationToolbar';
import { IconButton } from '../../../button';
import { Select } from '../../../select';

describe('PaginationToolbar', () => {

  describe('snapshots', () => {
    test('should match snaphot', () => {
      const wrapper = mount(
        <PaginationToolbar
            page={0}
            count={0} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('setPage and setRowsPerPage', () => {
      let mockSetPage;
      let mockSetRowsPerPage;
      let wrapper;
      let buttons;
      beforeEach(() => {
        mockSetPage = jest.fn();
        mockSetRowsPerPage = jest.fn();
        wrapper = mount(
          <PaginationToolbar
              page={0}
              setPage={mockSetPage}
              setRowsPerPage={mockSetRowsPerPage} />
        );
        buttons = wrapper.find(IconButton);
      });
      test('should invoke setPage with page - 1 when back button is clicked', () => {
        const prevButton = buttons.get(0);

        expect(mockSetPage).toHaveBeenCalledTimes(0);
        prevButton.props.onClick();
        expect(mockSetPage).toHaveBeenCalledTimes(1);
        expect(mockSetPage.mock.calls[0][0]).toEqual(-1);
      });

      test('should invoke setPage with page + 1 when back button is clicked', () => {
        const nextButton = buttons.get(1);

        expect(mockSetPage).toHaveBeenCalledTimes(0);
        nextButton.props.onClick();
        expect(mockSetPage).toHaveBeenCalledTimes(1);
        expect(mockSetPage.mock.calls[0][0]).toEqual(1);
      });

      test('should setPage to 0 for Select onChange', () => {
        const select = wrapper.find(Select).get(0);

        expect(mockSetPage).toHaveBeenCalledTimes(0);
        select.props.onChange();
        expect(mockSetPage).toHaveBeenCalledTimes(1);
        expect(mockSetPage.mock.calls[0][0]).toEqual(0);
      });

      test('should setRowsPerPage when Select onChange', () => {
        const select = wrapper.find(Select).get(0);

        expect(mockSetRowsPerPage).toHaveBeenCalledTimes(0);
        select.props.onChange(20);
        expect(mockSetRowsPerPage).toHaveBeenCalledTimes(1);
        expect(mockSetRowsPerPage.mock.calls[0][0]).toEqual(20);
      });
    });
  });
});
