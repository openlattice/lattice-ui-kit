import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Table from './Table';
import TableBody from './TableBody';
import PaginationToolbar from './PaginationToolbar';
import { StyledTable } from './styled';
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
        wrapper.find('Cell').get(0).props.onClick();
      });

      expect(setState.mock.calls[2][0]).toEqual('desc');
      expect(setState.mock.calls[3][0]).toEqual('name');
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
