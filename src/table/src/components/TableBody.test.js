import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableBody from './TableBody';
import TableRow from './TableRow';
import { Cell } from './styled';
import { TABLE_DATA, TABLE_HEADERS } from '../../stories/constants';

describe('TableBody', () => {

  const components = { Row: TableRow, Cell };

  describe('render', () => {
    test('should render tbody at root', () => {
      const wrapper = shallow(
        <TableBody
            components={components}
            headers={TABLE_HEADERS}
            data={TABLE_DATA}
            rowsPerPage={10}
            page={0} />
      );
      expect(wrapper.type()).toEqual('tbody');
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render spinner when isLoading=true', () => {
      const wrapper = shallow(
        <TableBody
            components={components}
            headers={TABLE_HEADERS}
            isLoading
            data={[]}
            rowsPerPage={10}
            page={0} />
      );

      expect(wrapper.find('Spinner')).toHaveLength(1);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render sorted data by page', () => {
      const rowComponent = () => <div>test</div>;
      const wrapper = shallow(
        <TableBody
            components={components}
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            order="desc"
            orderBy="name"
            rowsPerPage={5}
            rowComponent={rowComponent}
            page={0} />
      );

      let rowComponents = wrapper.find(rowComponent);
      let actualOrderByIndices = [1, 4, 2, 5, 3];
      rowComponents.forEach((row, index) => {
        const rowData = row.prop('data');
        const actualIndex = actualOrderByIndices[index];
        expect(rowData).toEqual(TABLE_DATA[actualIndex]);
      });

      // change to page: 1
      wrapper.setProps({ page: 1 });
      rowComponents = wrapper.find(rowComponent);
      actualOrderByIndices = [6, 0];
      rowComponents.forEach((row, index) => {
        const rowData = row.prop('data');
        const actualIndex = actualOrderByIndices[index];
        expect(rowData).toEqual(TABLE_DATA[actualIndex]);
      });
    });

    test('should render empty-row-filler if displayed rows is less then rowsPerPage', () => {
      const wrapper = shallow(
        <TableBody
            components={components}
            data={TABLE_DATA}
            headers={TABLE_HEADERS}
            rowsPerPage={5}
            page={0} />
      );

      expect(wrapper.find('#empty-row-filler')).toHaveLength(0);
      wrapper.setProps({ page: 1 });
      expect(wrapper.find('#empty-row-filler')).toHaveLength(1);
    });
  });
});
