import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableHeader from './TableHeader';
import { TableRow } from './styled';
import { TABLE_HEADERS } from '../../stories/constants';
import HeadCell from './HeadCell';

describe('TableHeader', () => {

  const components = { HeadRow: TableRow, HeadCell };

  describe('props', () => {
    describe('sticky', () => {
      test('pass sticky prop to TableRow', () => {
        const wrapper = shallow(<TableHeader components={components} sticky />);

        const tableRowWrapper = wrapper.find('TableRow');
        expect(tableRowWrapper.prop('sticky')).toEqual(true);
      });
    });

    describe('onSort', () => {
      test('invoke onSort with property when HeadCell is clicked', () => {
        const mockOnSort = jest.fn();
        const wrapper = shallow(
          <TableHeader
              components={components}
              headers={TABLE_HEADERS}
              onSort={mockOnSort} />
        );

        const headerCells = wrapper.find(HeadCell);
        expect(mockOnSort).toHaveBeenCalledTimes(0);

        headerCells.get(0).props.onClick();
        expect(mockOnSort).toHaveBeenCalledTimes(1);
        expect(mockOnSort.mock.calls[0][1]).toEqual('name');

        headerCells.get(1).props.onClick();
        expect(mockOnSort).toHaveBeenCalledTimes(2);
        expect(mockOnSort.mock.calls[1][1]).toEqual('dob');
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });

    describe('order and orderBy', () => {
      test('should pass order to HeadCell when orderBy matches header key', () => {
        const wrapper = shallow(
          <TableHeader
              components={components}
              headers={TABLE_HEADERS}
              order="asc"
              orderBy="name" />
        );

        const headerCells = wrapper.find(HeadCell);
        expect(headerCells.get(0).props.order).toEqual('asc');
        expect(headerCells.get(1).props.order).toEqual(false);
        expect(headerCells.get(2).props.order).toEqual(false);
        expect(headerCells.get(3).props.order).toEqual(false);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });

  describe('render', () => {
    test('should render a thead at the root', () => {
      const wrapper = shallow(<TableHeader components={components} />);
      expect(wrapper.type()).toEqual('thead');
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render sortable HeadCells', () => {
      const wrapper = shallow(<TableHeader components={components} headers={TABLE_HEADERS} />);
      const headerCells = wrapper.find(HeadCell);

      headerCells.forEach((headerCell) => {
        expect(headerCell.prop('sortable')).toEqual(true);
      });
      expect(headerCells).toHaveLength(TABLE_HEADERS.length);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
