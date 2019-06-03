import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Map } from 'immutable';

import { mockSearchResultsForPeople, mockResultLabels } from './constants';
import DataGrid from './DataGrid';
import Label from '../../../../label';
import { Truncated } from './styled/StyledResultComponents';

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

  describe('render', () => {
    test('should only render data for labels with matching keys', () => {
      const data = mockSearchResultsForPeople.first();
      const customResultLabels = Map({
        firstName: 'First Name',
      });

      const wrapper = mount(<DataGrid data={data} labelMap={customResultLabels} />);
      expect(wrapper.find(Label)).toHaveLength(1);
      expect(wrapper.find(Truncated)).toHaveLength(1);

      expect(wrapper.find(Label).text()).toEqual(customResultLabels.get('firstName'));
      expect(wrapper.find(Truncated).text()).toEqual(data.get('firstName'));
    });

    test('should render all data if labelMap not provided', () => {
      const data = mockSearchResultsForPeople.first();

      const wrapper = mount(<DataGrid data={data} />);
      expect(wrapper.find(Label)).toHaveLength(data.count());
      expect(wrapper.find(Truncated)).toHaveLength(data.count());
    });
  });

});
