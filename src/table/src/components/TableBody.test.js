import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableBody from './TableBody';
import { TABLE_DATA, TABLE_HEADERS } from '../../stories/constants';

describe('TableBody', () => {

  describe('render', () => {
    test('should render tbody at root', () => {
      const wrapper = shallow(
        <TableBody
            headers={TABLE_HEADERS}
            data={TABLE_DATA}
            rowsPerPage={10}
            page={0} />
      );
      expect(wrapper.type()).toEqual('tbody');
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render rowComponent if provided', () => {
      const rowComponent = () => <div>test</div>;
      const wrapper = shallow(
        <TableBody
            headers={TABLE_HEADERS}
            data={TABLE_DATA}
            rowsPerPage={10}
            rowComponent={rowComponent}
            page={0} />
      );

      const rowComponents = wrapper.find(rowComponent);
      expect(rowComponents).toHaveLength(TABLE_DATA.length);
      rowComponents.forEach((row, index) => {
        expect(row.prop('data')).toEqual(TABLE_DATA[index]);
        expect(row.prop('headers')).toEqual(TABLE_HEADERS);
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
