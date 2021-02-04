import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Map } from 'immutable';

import DataGrid from './DataGrid';
import { mockResultLabels, mockSearchResultsForPeople } from './constants';
import { Text } from './styled/StyledResultComponents';

import Label from '../../../../label';

describe('DataGrid', () => {
  describe('snapshots', () => {
    test('should match snapshot', () => {
      const data = mockSearchResultsForPeople.first();
      const wrapper = mount(<DataGrid data={data} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('should match snapshot with labels', () => {
      const data = mockSearchResultsForPeople.first();
      const wrapper = mount(<DataGrid data={data} labelMap={mockResultLabels} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('truncate', () => {
    test('truncate=true should overflow with ellipsis', () => {
      const data = mockSearchResultsForPeople.first();
      const wrapper = mount(<DataGrid data={data} truncate />);

      const textWrapper = wrapper.find(Text).at(0);

      expect(textWrapper).toHaveStyleRule('overflow', 'hidden');
      expect(textWrapper).toHaveStyleRule('text-overflow', 'ellipsis');
      expect(textWrapper).toHaveStyleRule('white-space', 'nowrap');
    });
  });

  describe('render', () => {
    test('should only render data for labels with matching keys', () => {
      const data = mockSearchResultsForPeople.first();
      const customResultLabels = Map({
        firstName: 'First Name',
      });

      const wrapper = mount(<DataGrid data={data} labelMap={customResultLabels} />);
      expect(wrapper.find(Label)).toHaveLength(1);
      expect(wrapper.find(Text)).toHaveLength(1);

      expect(wrapper.find(Label).text()).toEqual(customResultLabels.get('firstName'));
      expect(wrapper.find(Text).text()).toEqual(data.get('firstName'));
    });

    test('should render all data if labelMap not provided', () => {
      const data = mockSearchResultsForPeople.first();

      const wrapper = mount(<DataGrid data={data} />);
      expect(wrapper.find(Label)).toHaveLength(data.count());
      expect(wrapper.find(Text)).toHaveLength(data.count());
    });
  });

});
