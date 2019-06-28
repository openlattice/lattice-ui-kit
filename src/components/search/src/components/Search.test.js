import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { Map, List } from 'immutable';

import Search from './Search';
import SearchResults from './SearchResults';
import PersonResult from './PersonResult';
import Result from './Result';
import { Input } from '../../../../input';
import { Title } from './styled/StyledSearchComponents';
import { Card } from '../../../../layout';
import { DatePicker } from '../../../../datetime';
import {
  mockFilterFields,
  mockSearchResultsForPeople,
  mockSearchResultsForReports
} from './constants';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = shallow(<Search />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    describe('render defaults', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<Search />);
      });

      test('render Card', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
      });

      test('default search fields', () => {
        expect(wrapper.find(Input)).toHaveLength(2);
        expect(wrapper.find(DatePicker)).toHaveLength(1);
      });

      test('search button', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
      });

      test('default SearchResults', () => {
        expect(wrapper.find(SearchResults)).toHaveLength(1);
      });

    });

    describe('render with props', () => {
      test('should render provided title', () => {
        const wrapper = shallow(<Search title="Title" />);
        expect(wrapper.find(Title).text()).toEqual('Title');
      });

      test('should not render undefined title', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find(Title)).toHaveLength(0);
      });

      test('should render provided filterFields', () => {
        const wrapper = shallow(<Search filterFields={mockFilterFields} />);
        expect(wrapper.find('CheckboxSelect')).toHaveLength(3);
      });

      test('should render custom SearchResultComponent', () => {
        const customComponent = props => <div {...props} />;
        customComponent.displayName = 'CustomComponent';
        const wrapper = shallow(<Search searchResultsComponent={customComponent} />);

        expect(wrapper.find('CustomComponent')).toHaveLength(1);
      });

      test('should render custom ResultComponents', () => {
        const wrapper = mount(
          <Search
              searchResults={mockSearchResultsForPeople}
              resultComponent={PersonResult} />
        );
        expect(wrapper.find(PersonResult)).toHaveLength(3);
      });

      test('should render default Result when provided searchResults', () => {
        const wrapper = mount(<Search searchResults={mockSearchResultsForPeople} />);
        expect(wrapper.find(Result)).toHaveLength(3);
      });

    });

  });

  describe('searchFieldValues', () => {
    test('change input', () => {
      const wrapper = shallow(<Search />);
      const firstNameInput = wrapper.find('Input[name="firstname"]');

      expect(firstNameInput).toHaveLength(1);
      expect(firstNameInput.type()).toEqual(Input);

      const changeValue = 'OpenLattice';
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('firstname', changeValue);

      firstNameInput.simulate('change', { currentTarget: { value: changeValue, name: 'firstname' } });

      const actualSearchFieldValues = wrapper.state('searchFieldValues');
      expect(actualSearchFieldValues).toStrictEqual(expectedSearchFieldValues);

    });

    test('delete input', () => {
      const wrapper = shallow(<Search />);
      const firstNameInput = wrapper.find('Input[name="firstname"]');

      expect(firstNameInput).toHaveLength(1);
      expect(firstNameInput.type()).toEqual(Input);

      const changeValue = undefined;
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('firstname', '');

      firstNameInput.simulate('change', { currentTarget: { value: changeValue, name: 'firstname' } });

      const actualSearchFieldValues = wrapper.state('searchFieldValues');
      expect(actualSearchFieldValues).toStrictEqual(expectedSearchFieldValues);

    });

    test('change date', () => {
      const wrapper = shallow(<Search />);
      const datePicker = wrapper.find(DatePicker);

      expect(datePicker).toHaveLength(1);
      expect(datePicker.type()).toEqual(DatePicker);

      const changeValue = '1970-01-01';
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('dob', changeValue);

      datePicker.simulate('change', changeValue);

      const actualSearchFieldValues = wrapper.state('searchFieldValues');
      expect(actualSearchFieldValues).toStrictEqual(expectedSearchFieldValues);

    });
  });

  describe('filterfieldValues', () => {
    test('handleOnChangeFilter should change filterFieldValues', () => {
      const wrapper = shallow(<Search filterFields={mockFilterFields} />);
      const instance = wrapper.instance();

      const changeValue = [{
        label: 'Report #1',
        value: 'Report #1'
      }];
      const changeEvent = { name: 'reportType' };

      const initialFilterFieldValues = wrapper.state('filterFieldValues');
      const expectedFilterFieldValues = initialFilterFieldValues.set('reportType', changeValue);
      instance.handleOnChangeFilter(changeValue, changeEvent);

      const actualFilterFieldValues = wrapper.state('filterFieldValues');
      expect(actualFilterFieldValues).toStrictEqual(expectedFilterFieldValues);
    });
  });

  describe('renderFilteredSearchResults', () => {
    test('should return null with falsy SearchResultsComponent', () => {
      const wrapper = shallow(<Search searchResultsComponent={false} />);
      const instance = wrapper.instance();
      expect(instance.renderFilteredSearchResults()).toEqual(null);
    });

    test('should not filter results if invalid searchResults', () => {
      const wrapper = shallow(
        <Search
            searchResults={false} />
      );

      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(0);
    });

    test('should not filter results if invalid filterFields', () => {
      const wrapper = shallow(
        <Search
            searchResults={mockSearchResultsForReports}
            filterFields={false} />
      );
      const instance = wrapper.instance();

      const changeValue = [{
        label: 'Report #1',
        value: 'Report #1'
      }];
      const changeEvent = { name: 'reportType' };
      instance.handleOnChangeFilter(changeValue, changeEvent);

      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults).toEqual(mockSearchResultsForReports);
    });

    test('should filter results', () => {
      const wrapper = shallow(
        <Search
            filterFields={mockFilterFields}
            searchResults={mockSearchResultsForReports} />
      );
      const instance = wrapper.instance();

      let changeValue = [{
        value: 'Report #1'
      }];
      let changeEvent = { name: 'reportType' };
      // apply one filter
      instance.handleOnChangeFilter(changeValue, changeEvent);
      let filteredResults = wrapper.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(3);

      changeValue = [{
        label: 'Badge #2',
        value: 'Badge #2'
      }];
      changeEvent = { name: 'badges' };

      // apply second filter
      instance.handleOnChangeFilter(changeValue, changeEvent);
      filteredResults = wrapper.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(2);

      changeValue = [{
        value: 'smitty@werbenjagermanjensen.com'
      }];
      changeEvent = { name: 'submitter' };

      // apply third filter
      instance.handleOnChangeFilter(changeValue, changeEvent);
      filteredResults = wrapper.find(SearchResults).props().results;
      expect(filteredResults.count()).toEqual(1);
      expect(filteredResults.first()).toEqual(mockSearchResultsForReports.get(2));

    });

    test('should return all results if no filter applied', () => {
      const wrapper = shallow(
        <Search
            filterFields={mockFilterFields}
            searchResults={mockSearchResultsForReports} />
      );
      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(filteredResults).toEqual(mockSearchResultsForReports);
    });

    test('should not filter for non-matching filter definition', () => {
      const wrapper = shallow(
        <Search
            filterFields={mockFilterFields}
            searchResults={mockSearchResultsForReports} />
      );
      const instance = wrapper.instance();

      const changeValue = [{
        value: 'Report #1'
      }];
      const changeEvent = { name: 'BaDFiLtErDefiNiTioN' };
      instance.handleOnChangeFilter(changeValue, changeEvent);

      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(filteredResults).toEqual(mockSearchResultsForReports);
    });
  });

  describe('onSearch()', () => {
    test('should call handleOnClickSearchButton', () => {
      const wrapper = mount(<Search />);
      const instance = wrapper.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      wrapper.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
    });

    test('should invoke onSearch with searchFieldValues', () => {
      const mockOnSearch = jest.fn();
      const wrapper = mount(<Search onSearch={mockOnSearch} />);

      const searchFieldValues = Map({
        firstname: 'Smitty',
        lastname: 'Werbenjagermanjensen',
        dob: '2002-02-22'
      });

      wrapper.setState({ searchFieldValues });
      const instance = wrapper.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      wrapper.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch.mock.calls[0][0]).toEqual(searchFieldValues);
    });

  });

  describe('onResultClick', () => {
    test('should call onResultClick with result', () => {
      const mockOnResultClick = jest.fn();
      const wrapper = mount(<Search onResultClick={mockOnResultClick} searchResults={mockSearchResultsForPeople} />);

      const resultWrapper = wrapper.find('Result').first();
      expect(resultWrapper).toHaveLength(1);

      resultWrapper.simulate('click');
      expect(mockOnResultClick).toHaveBeenCalledTimes(1);
      expect(mockOnResultClick.mock.calls[0][0]).toEqual(mockSearchResultsForPeople.first());
    });

    test('should not call onResultClick if onClick is not a function', () => {
      const mockOnResultClick = jest.fn();
      const wrapper = mount(<Search onResultClick={mockOnResultClick} searchResults={mockSearchResultsForPeople} />);

      const resultWrapper = wrapper.find('Result').first();
      expect(resultWrapper).toHaveLength(1);

      resultWrapper.simulate('click');
      expect(mockOnResultClick).toHaveBeenCalledTimes(1);
      expect(mockOnResultClick.mock.calls[0][0]).toEqual(mockSearchResultsForPeople.first());
    });

  });

});
