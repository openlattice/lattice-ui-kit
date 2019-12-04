import React from 'react';
import { mount, shallow } from 'enzyme';
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
    let buttons;
    let mockOnPageChange;
    let mockSetPage;
    let mockSetRowsPerPage;
    let wrapper;
    beforeEach(() => {
      mockSetPage = jest.fn();
      mockSetRowsPerPage = jest.fn();
      mockOnPageChange = jest.fn();
      wrapper = mount(
        <PaginationToolbar
            count={10}
            onPageChange={mockOnPageChange}
            page={1}
            rowsPerPageOptions={[5, 10]}
            setPage={mockSetPage}
            setRowsPerPage={mockSetRowsPerPage} />
      );
      buttons = wrapper.find(IconButton);
    });

    describe('change page', () => {
      test('should invoke setPage and onPageChange when back button is clicked', () => {
        const prevButton = buttons.get(0);

        expect(mockSetPage).toHaveBeenCalledTimes(0);
        prevButton.props.onClick();
        expect(mockSetPage).toHaveBeenCalledTimes(1);
        expect(mockSetPage.mock.calls[0][0]).toEqual(0);

        expect(mockOnPageChange.mock.calls[0][0]).toEqual({
          page: 0,
          start: 0,
          rowsPerPage: 5
        });
      });

      test('should invoke setPage and onPageChange when next button is clicked', () => {
        const nextButton = buttons.get(1);

        expect(mockSetPage).toHaveBeenCalledTimes(0);
        nextButton.props.onClick();
        expect(mockSetPage).toHaveBeenCalledTimes(1);
        expect(mockSetPage.mock.calls[0][0]).toEqual(2);

        expect(mockOnPageChange.mock.calls[0][0]).toEqual({
          page: 2,
          start: 10,
          rowsPerPage: 5
        });
      });
    });

    describe('change rowsPerPage', () => {
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

      test('should invoke onPageChange when Select onChange', () => {
        const select = wrapper.find(Select).get(0);

        expect(mockSetRowsPerPage).toHaveBeenCalledTimes(0);
        select.props.onChange(20);
        expect(mockSetRowsPerPage).toHaveBeenCalledTimes(1);
        expect(mockSetRowsPerPage.mock.calls[0][0]).toEqual(20);
      });
    });
  });

  describe('render', () => {
    describe('row range', () => {
      test('should show updated range when count and page change', () => {
        const wrapper = shallow(
          <PaginationToolbar
              page={0}
              count={0}
              rowsPerPage={5} />
        );
        expect(wrapper.find('#row-range').text()).toEqual('0 - 0 of 0');
        wrapper.setProps({ count: 7 });
        expect(wrapper.find('#row-range').text()).toEqual('1 - 5 of 7');
        wrapper.setProps({ page: 1 });
        expect(wrapper.find('#row-range').text()).toEqual('6 - 7 of 7');
      });
    });

    describe('rowsPerPageOptions', () => {

      test('should not show Select with only one value in rowsPerPageOptions', () => {
        const wrapper = shallow(
          <PaginationToolbar
              page={0}
              count={0}
              rowsPerPageOptions={[5, 10]} />
        );
        expect(wrapper.find(Select)).toHaveLength(1);
        wrapper.setProps({ rowsPerPageOptions: [5] });
        expect(wrapper.find(Select)).toHaveLength(0);
      });
    });

    describe('page buttons', () => {

      test('should disable page buttons when at their upper and lower page bounds', () => {
        const wrapper = mount(
          <PaginationToolbar
              page={0}
              count={7}
              rowsPerPage={5} />
        );
        const buttons = wrapper.find(IconButton);
        const prevButton = buttons.get(0);
        const nextButton = buttons.get(1);
        expect(prevButton.props.disabled).toEqual(true);
        expect(nextButton.props.disabled).toEqual(false);

        wrapper.setProps({ page: 1 });
        expect(wrapper.find(IconButton).get(1).props.disabled).toEqual(true);
      });
    });
  });
});
