import React from 'react';

import toJson from 'enzyme-to-json';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { mount } from 'enzyme';
import { List, Map } from 'immutable';
import { act } from 'react-dom/test-utils';

import PersonResult from './PersonResult';
import Result from './Result';
import Search from './Search';
import SearchResults from './SearchResults';
import {
  mockFilterFields,
  mockSearchResultsForPeople,
  mockSearchResultsForReports
} from './constants';
import { Title } from './styled/StyledSearchComponents';

import LatticeLuxonUtils from '../../../../datetime/src/components/utils/LatticeLuxonUtils';
import { DatePicker } from '../../../../datetime';
import { lightTheme } from '../../../../datetime/src/components/styles';
import { Card } from '../../../../layout';
import { Input } from '../../../../text';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    describe('render defaults', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
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
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search title="Title" />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
        expect(wrapper.find(Title).text()).toEqual('Title');
      });

      test('should not render undefined title', () => {
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
        expect(wrapper.find(Title)).toHaveLength(0);
      });

      test('should render provided filterFields', () => {
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search filterFields={mockFilterFields} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
        expect(wrapper.find('CheckboxSelect')).toHaveLength(3);
      });

      test('should render custom SearchResultComponent', () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        const customComponent = () => <div>custom result</div>;
        customComponent.displayName = 'CustomComponent';
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search searchResultsComponent={customComponent} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );

        expect(wrapper.find('CustomComponent')).toHaveLength(1);
      });

      test('should render custom ResultComponents', () => {
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search
                  searchResults={mockSearchResultsForPeople}
                  resultComponent={PersonResult} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
        expect(wrapper.find(PersonResult)).toHaveLength(3);
      });

      test('should render default Result when provided searchResults', () => {
        const wrapper = mount(
          <ThemeProvider theme={lightTheme}>
            <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
              <Search searchResults={mockSearchResultsForPeople} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
        expect(wrapper.find(Result)).toHaveLength(3);
      });

    });

  });

  describe('filterfieldValues', () => {
    test('handleOnChangeFilter should change filterFieldValues', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search filterFields={mockFilterFields} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      const search = wrapper.find(Search);
      const instance = search.instance();

      const changeValue = [{
        label: 'Report #1',
        value: 'Report #1'
      }];
      const changeEvent = { name: 'reportType' };

      const initialFilterFieldValues = search.state('filterFieldValues');
      const expectedFilterFieldValues = initialFilterFieldValues.set('reportType', changeValue);
      instance.handleOnChangeFilter(changeValue, changeEvent);

      const actualFilterFieldValues = search.state('filterFieldValues');
      expect(actualFilterFieldValues).toStrictEqual(expectedFilterFieldValues);
    });
  });

  describe('renderFilteredSearchResults', () => {
    test('should return null with falsy SearchResultsComponent', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search searchResultsComponent={false} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      const search = wrapper.find(Search);
      const instance = search.instance();
      expect(instance.renderFilteredSearchResults()).toEqual(null);
    });

    test('should not filter results if invalid searchResults', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search
                searchResults={false} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(0);
    });

    test('should not filter results if invalid filterFields', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search
                searchResults={mockSearchResultsForReports}
                filterFields={false} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const search = wrapper.find(Search);
      const instance = search.instance();

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

    // Feature marked for sunset
    // eslint-disable-next-line jest/no-disabled-tests
    xtest('should filter results', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search
                filterFields={mockFilterFields}
                searchResults={mockSearchResultsForReports} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      const search = wrapper.find(Search);
      const instance = search.instance();

      let changeValue = [{
        value: 'Report #1'
      }];
      let changeEvent = { name: 'reportType' };
      // apply one filter
      act(() => {
        instance.handleOnChangeFilter(changeValue, changeEvent);
      });
      let filteredResults = search.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(3);

      changeValue = [{
        label: 'Badge #2',
        value: 'Badge #2'
      }];
      changeEvent = { name: 'badges' };

      // apply second filter
      instance.handleOnChangeFilter(changeValue, changeEvent);
      filteredResults = search.find(SearchResults).props().results;
      expect(List.isList(filteredResults)).toEqual(true);
      expect(filteredResults.count()).toEqual(2);

      changeValue = [{
        value: 'smitty@werbenjagermanjensen.com'
      }];
      changeEvent = { name: 'submitter' };

      // apply third filter
      instance.handleOnChangeFilter(changeValue, changeEvent);
      filteredResults = search.find(SearchResults).props().results;
      expect(filteredResults.count()).toEqual(1);
      expect(filteredResults.first()).toEqual(mockSearchResultsForReports.get(2));

    });

    test('should return all results if no filter applied', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search
                filterFields={mockFilterFields}
                searchResults={mockSearchResultsForReports} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      const filteredResults = wrapper.find(SearchResults).props().results;
      expect(filteredResults).toEqual(mockSearchResultsForReports);
    });

    test('should not filter for non-matching filter definition', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search
                filterFields={mockFilterFields}
                searchResults={mockSearchResultsForReports} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const search = wrapper.find(Search);
      const instance = search.instance();

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
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      const search = wrapper.find(Search);
      const instance = search.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      search.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
    });

    test('should invoke onSearch with searchFieldValues', () => {
      const mockOnSearch = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search onSearch={mockOnSearch} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const searchFieldValues = Map({
        firstname: 'Smitty',
        lastname: 'Werbenjagermanjensen',
        dob: '2002-02-22'
      });

      const searchWrapper = wrapper.find(Search);

      searchWrapper.setState({ searchFieldValues });
      const instance = searchWrapper.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      searchWrapper.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch.mock.calls[0][0]).toEqual(searchFieldValues);
    });

  });

  describe('onResultClick', () => {
    test('should call onResultClick with result', () => {
      const mockOnResultClick = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search onResultClick={mockOnResultClick} searchResults={mockSearchResultsForPeople} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const resultWrapper = wrapper.find('Result').first();
      expect(resultWrapper).toHaveLength(1);

      resultWrapper.simulate('click');
      expect(mockOnResultClick).toHaveBeenCalledTimes(1);
      expect(mockOnResultClick.mock.calls[0][0]).toEqual(mockSearchResultsForPeople.first());
    });

    test('should not call onResultClick if onClick is not a function', () => {
      const mockOnResultClick = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Search onResultClick={mockOnResultClick} searchResults={mockSearchResultsForPeople} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      const resultWrapper = wrapper.find('Result').first();
      expect(resultWrapper).toHaveLength(1);

      resultWrapper.simulate('click');
      expect(mockOnResultClick).toHaveBeenCalledTimes(1);
      expect(mockOnResultClick.mock.calls[0][0]).toEqual(mockSearchResultsForPeople.first());
    });

  });

});
