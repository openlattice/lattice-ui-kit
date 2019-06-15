import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { List } from 'immutable';

import SearchResults from './SearchResults';
import PersonResult from './PersonResult';
import Result from './Result';
import {
  mockSearchResultsForPeople,
} from './constants';
import Spinner from '../../../../spinner';
import IconSplash from './IconSplash';

describe('SearchResults', () => {

  describe('snapshots', () => {
    test('should match snapshot', () => {
      const wrapper = mount(<SearchResults />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('props', () => {

    test('should render custom ResultComponents', () => {
      const wrapper = mount(
        <SearchResults
            results={mockSearchResultsForPeople}
            resultComponent={PersonResult} />
      );
      expect(wrapper.find(PersonResult)).toHaveLength(3);
    });

    test('should render default Result when provided searchResults', () => {
      const wrapper = mount(<SearchResults results={mockSearchResultsForPeople} />);
      expect(wrapper.find(Result)).toHaveLength(3);
    });

    test('should render Spinner when isLoading', () => {
      const wrapper = shallow(<SearchResults isLoading />);
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    test('should render default noResult when hasSearched and results are empty', () => {
      const wrapper = mount(<SearchResults hasSearched results={List()} />);
      expect(wrapper.find(IconSplash)).toHaveLength(1);
    });

    test('should render custom noResult when hasSearched and results are empty', () => {
      const customNoResults = () => (<div>I am custom</div>);
      const wrapper = mount(<SearchResults hasSearched results={List()} noResults={customNoResults} />);
      expect(wrapper.find(customNoResults)).toHaveLength(1);
    });

  });

});
