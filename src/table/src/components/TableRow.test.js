import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableRow from './TableRow';
import { StyledRow, Cell } from './styled';
import { TABLE_HEADERS, TABLE_DATA } from '../../stories/constants';

describe('TableRow', () => {
  const components = { Cell };

  describe('render', () => {
    test('should render tr at the root', () => {
      const wrapper = shallow(
        <TableRow
            components={components}
            headers={[]}
            data={{}} />
      );

      expect(wrapper.type()).toEqual(StyledRow);
      expect(wrapper.type().target).toEqual('tr');
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render Cell for each header with data[header.key]', () => {
      const wrapper = shallow(
        <TableRow
            components={components}
            headers={TABLE_HEADERS}
            data={TABLE_DATA[0]} />
      );

      expect(wrapper.children()).toHaveLength(TABLE_HEADERS.length);
      TABLE_HEADERS.forEach((header, index) => {
        const { key } = header;
        const child = wrapper.childAt(index);
        expect(child.text()).toEqual(TABLE_DATA[0][key]);
      });
    });
  });
});
