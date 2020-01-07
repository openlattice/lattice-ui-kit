import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableHeader from './TableHeader';
import { StyledRow } from './styled';
import HeadCell from './HeadCell';
import { TABLE_HEADERS } from '../../stories/constants';
import { MOCK_CLICK_EVENT } from '../../../utils/testing/MockUtils';

describe('TableHeader', () => {

  const components = { HeadCell };

  describe('props', () => {
    describe('sticky', () => {
      test('pass sticky prop to StyledRow', () => {
        const wrapper = shallow(<TableHeader components={components} sticky />);

        const tableRowWrapper = wrapper.find(StyledRow);
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

        headerCells.get(0).props.onClick(MOCK_CLICK_EVENT);
        expect(mockOnSort).toHaveBeenCalledTimes(1);
        expect(mockOnSort).toBeCalledWith('name', MOCK_CLICK_EVENT);

        expect(mockOnSort).toMatchSnapshot();
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });

    describe('sortable', () => {
      test('should not pass onClick when header sortable=false', () => {
        const mockOnSort = jest.fn();
        const wrapper = shallow(
          <TableHeader
              components={components}
              headers={TABLE_HEADERS}
              onSort={mockOnSort} />
        );

        const headerCells = wrapper.find(HeadCell);
        headerCells.forEach((cell) => {
          if (cell.prop('sortable') !== true) {
            expect(cell.prop('onClick')).toEqual(undefined);
          }
        });
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

      expect(headerCells).toHaveLength(TABLE_HEADERS.length);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
