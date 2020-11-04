import React from 'react';

import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import PaginationToolbar from './PaginationToolbar';
import Table from './Table';
import TableBody from './TableBody';
import { StyledTable } from './styled';

import { Select } from '../../../select';
import { MOCK_CLICK_EVENT, MOCK_SELECT_EVENT } from '../../../utils/testing/MockUtils';
import { TABLE_DATA, TABLE_HEADERS } from '../../stories/constants';

describe('Table', () => {

  describe('props', () => {
    describe('paginated', () => {
      test('paginated=true should render PaginationToolbar', () => {
        const wrapper = shallow(<Table data={TABLE_DATA} headers={TABLE_HEADERS} paginated />);
        expect(wrapper.find(PaginationToolbar)).toHaveLength(2);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      test('paginated Table should set rowsPerPage to 5 by default', () => {
        const wrapper = shallow(<Table headers={TABLE_HEADERS} paginated />);

        expect(wrapper.find(TableBody).props().rowsPerPage).toEqual(5);
        wrapper.find(PaginationToolbar).forEach((node) => {
          expect(node.prop('rowsPerPage')).toEqual(5);
        });
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      test('Table should set rowsPerPage to data.length when data is provided', () => {
        const wrapper = shallow(<Table data={TABLE_DATA} headers={TABLE_HEADERS} />);

        expect(wrapper.find(TableBody).props().rowsPerPage).toEqual(7);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      test('paginated Table should set rowsPerPage to data.length when data is provided', () => {
        const wrapper = shallow(
          <Table
              data={TABLE_DATA}
              headers={TABLE_HEADERS}
              paginated />
        );

        expect(wrapper.find(TableBody).props().rowsPerPage).toEqual(7);
        wrapper.find(PaginationToolbar).forEach((node) => {
          expect(node.prop('rowsPerPage')).toEqual(7);
        });
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      test('paginated Table should set rowsPerPage to first element of rowsPerPageOptions when provided', () => {
        const wrapper = shallow(
          <Table
              data={TABLE_DATA}
              headers={TABLE_HEADERS}
              paginated
              rowsPerPageOptions={[10, 20, 100]} />
        );

        expect(wrapper.find(TableBody).props().rowsPerPage).toEqual(10);
        wrapper.find(PaginationToolbar).forEach((node) => {
          expect(node.prop('rowsPerPage')).toEqual(10);
        });
        expect(toJson(wrapper)).toMatchSnapshot();
      });

    });
  });

  describe('handleSort', () => {

    test('should set order and orderBy when invoked', () => {
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((init) => [init, setState]);

      const wrapper = mount(
        <Table
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            paginated />
      );

      act(() => {
        wrapper.find('Cell').get(0).props.onClick(MOCK_CLICK_EVENT);
      });

      expect(setState.mock.calls[2][0]).toEqual('desc'); // setOrder
      expect(setState.mock.calls[3][0]).toEqual('name'); // setOrderBy
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should invoke onSort with property and isDesc', () => {
      const mockOnSort = jest.fn();

      const wrapper = mount(
        <Table
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            onSort={mockOnSort}
            paginated />
      );

      act(() => {
        wrapper.find('Cell').get(0).props.onClick(MOCK_CLICK_EVENT);
      });

      expect(mockOnSort.mock.calls[0][0]).toEqual({
        column: 'name',
        order: 'desc',
        page: 1,
        rowsPerPage: 7,
        start: 0
      });
      expect(mockOnSort).toMatchSnapshot();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('handlePageChange', () => {

    test('should set page and rowsPerPage when invoked', () => {
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((init) => [init, setState]);

      const wrapper = mount(
        <Table
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            paginated />
      );

      act(() => {
        wrapper.find('button').last().props().onClick(MOCK_CLICK_EVENT);
      });

      expect(setState.mock.calls[2][0]).toEqual(2); // setPage
      expect(setState.mock.calls[3][0]).toEqual(7); // setRowsPerPage
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should invoke onPageChange on pagination button click', () => {
      const mockOnPageChange = jest.fn();

      const wrapper = mount(
        <Table
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            onPageChange={mockOnPageChange}
            paginated />
      );

      act(() => {
        wrapper.find('button').last().props().onClick(MOCK_CLICK_EVENT);
      });

      expect(mockOnPageChange).toBeCalledTimes(1);
      expect(mockOnPageChange.mock.calls[0][0]).toEqual({
        column: undefined,
        order: undefined,
        page: 2,
        rowsPerPage: 7,
        start: 7
      });
      expect(mockOnPageChange).toMatchSnapshot();
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should invoke onPageChange on rows per page select', () => {
      const mockOnPageChange = jest.fn();

      const wrapper = mount(
        <Table
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            rowsPerPageOptions={[5, 20, 50]}
            onPageChange={mockOnPageChange}
            paginated />
      );

      act(() => {
        wrapper.find(Select).get(0).props.onChange(20, MOCK_SELECT_EVENT);
      });

      expect(mockOnPageChange).toBeCalledTimes(1);
      expect(mockOnPageChange.mock.calls[0][0]).toEqual({
        column: undefined,
        order: undefined,
        page: 1,
        rowsPerPage: 20,
        start: 0
      });
      expect(mockOnPageChange).toMatchSnapshot();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('render', () => {
    test('should render table first child', () => {
      const wrapper = shallow(
        <Table data={TABLE_DATA} headers={TABLE_HEADERS} />
      );

      const target = wrapper.first().childAt(0);
      expect(target.type()).toEqual(StyledTable);
      expect(target.type().target).toEqual('table');
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

});
