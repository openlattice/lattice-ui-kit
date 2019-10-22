// @flow
import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import { Map, List } from 'immutable';
import type { ComponentType, Node } from 'react';

import DefaultResultComponent from './Result';
import DefaultSearchResults from './SearchResults';
import DatePicker from '../../../../datetime/src/components/DatePicker';
import Label from '../../../../label';
import { Button } from '../../../../button';
import { Input } from '../../../../text';
import { InputGrid, Title } from './styled/StyledSearchComponents';
import { CheckboxSelect } from '../../../../select';
import { Card, CardSegment, CardStack } from '../../../../layout';

import type { SearchResultsProps } from './SearchResults';
import type { ResultProps } from './Result';
import type { SearchFieldDefinition, FilterFieldDefinition } from '../../types';
import type { ReactSelectEvent, ReactSelectOption, ReactSelectValue } from '../../../../select/types';

type Props = {
  className ? :string;
  hasSearched ? :boolean;
  isLoading :any;
  filterFields ? :FilterFieldDefinition[];
  onResultClick ? :(result :Map) => void;
  onSearch :(searchFieldValues :Map) => void;
  resultComponent ? :ComponentType<ResultProps>;
  resultLabels ? :Map;
  searchFields ? :SearchFieldDefinition[];
  searchResults ? :List<Map>;
  searchResultsComponent ? :ComponentType<SearchResultsProps>;
  title :string;
};

type State = {
  searchFieldValues :Map;
  filterFieldValues :Map;
};

class Search extends Component<Props, State> {

  static defaultProps = {
    className: undefined,
    filterFields: [],
    hasSearched: false,
    onResultClick: undefined,
    resultComponent: DefaultResultComponent,
    resultLabels: undefined,
    searchFields: [
      {
        id: 'firstname',
        label: 'First Name'
      },
      {
        id: 'lastname',
        label: 'Last Name'
      },
      {
        id: 'dob',
        label: 'Date of Birth',
        type: 'date'
      },
    ],
    searchResults: List(),
    searchResultsComponent: DefaultSearchResults,
  }

  constructor(props :Props) {
    super(props);

    const searchFieldValues = Map().withMutations((map :Map) => {
      // $FlowFixMe optional not recognizing defaultProps
      props.searchFields.forEach((field :SearchFieldDefinition) => map.set(field.id, ''));
    });

    this.state = {
      searchFieldValues,
      filterFieldValues: Map()
    };
  }

  handleOnChangeInput = (e :SyntheticEvent<HTMLInputElement>) => {
    const { searchFieldValues } = this.state;
    const { value = '', name } = e.currentTarget;
    this.setState({
      searchFieldValues: searchFieldValues.set(name, value),
    });
  }

  getOnChangeDate = (name :string) => (date :string) => {
    const { searchFieldValues } = this.state;
    this.setState({
      searchFieldValues: searchFieldValues.set(name, date)
    });
  }

  handleOnClickSearchButton = (e :SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { onSearch } = this.props;
    const { searchFieldValues } = this.state;
    if (isFunction(onSearch)) {
      onSearch(searchFieldValues);
    }
  }

  handleOnChangeFilter = (value ? :ReactSelectValue, event :ReactSelectEvent) => {
    const { filterFieldValues } = this.state;
    const { name } = event;
    this.setState({
      filterFieldValues: filterFieldValues.set(name, value)
    });
  }

  renderFilteredSearchResults = () :Node => {
    const {
      hasSearched,
      isLoading,
      filterFields,
      onResultClick,
      resultComponent,
      resultLabels,
      searchResults,
      searchResultsComponent: SearchResultsComponent,
    } = this.props;
    const { filterFieldValues } = this.state;

    let filteredResults = List();
    if (searchResults && List.isList(searchResults)) {

      filteredResults = searchResults.filter((searchResult :Map) => (
        // accumulate matchAllFilters from all filterFieldValue keys where
        filterFieldValues.reduce((matchAllFilters :boolean, selectedValue :ReactSelectValue, fieldName :string) => {

          let filterFieldDef :?FilterFieldDefinition;
          if (filterFields && filterFields.length) {
            filterFieldDef = filterFields.find(
              (definition :FilterFieldDefinition) => (definition.id === fieldName)
            );
          }

          // there is matching filterFieldDef
          if (filterFieldDef) {
            // whose filterCallback yields truthy when provided the searchResult and selectedValue(s)
            return matchAllFilters && filterFieldDef.filterCallback(searchResult, selectedValue);
          }

          return matchAllFilters;
        }, true)
      ));

    }

    if (SearchResultsComponent) {
      return (
        <SearchResultsComponent
            hasSearched={hasSearched}
            isLoading={isLoading}
            onResultClick={onResultClick}
            resultComponent={resultComponent}
            resultLabels={resultLabels}
            results={filteredResults} />
      );
    }

    return null;
  }

  renderSearchFieldsSegment = () => {

    const { searchFields, title, isLoading } = this.props;
    const { searchFieldValues } = this.state;

    // $FlowFixMe optional not recognizing defaultProps
    const searchFieldComponents = searchFields.map((field :SearchFieldDefinition) => {

      let fieldComponent = (
        <Input
            id={`luk-search-${field.id}`}
            name={field.id}
            onChange={this.handleOnChangeInput}
            value={searchFieldValues.get(field.id)} />
      );

      // TODO: More flexible method for handling checkboxes, dropdowns, etc.
      if (field.type === 'date') {
        fieldComponent = (
          <DatePicker
              id={`luk-search-${field.id}`}
              name={field.id}
              onChange={this.getOnChangeDate(field.id)}
              value={searchFieldValues.get(field.id)} />
        );
      }

      return (
        <div key={`luk-search-key-${field.id}`}>
          <Label htmlFor={`luk-search-${field.id}`}>
            {field.label}
          </Label>
          {fieldComponent}
        </div>
      );
    });

    return (
      <CardSegment vertical>
        { title && <Title>{title}</Title> }
        <form>
          {/* $FlowFixMe optional not recognizing defaultProps */}
          <InputGrid columns={searchFields.length + 1} align="flex-start">
            {searchFieldComponents}
            <div>
              <Label stealth>Submit</Label>
              <Button
                  type="submit"
                  fullWidth
                  isLoading={isLoading}
                  mode="primary"
                  onClick={this.handleOnClickSearchButton}>
                Search
              </Button>
            </div>
          </InputGrid>
        </form>
      </CardSegment>
    );
  }

  renderFiltersSegment = () => {

    const { filterFields } = this.props;
    if (Array.isArray(filterFields) && filterFields.length) {
      const filterFieldComponents = filterFields.map((filter :FilterFieldDefinition) => {
        const options :ReactSelectOption[] = filter.options.map((v) => ({ label: v, value: v }));
        return (
          <div key={`luk-filter-key-${filter.id}`}>
            <Label
                bold
                key={filter.id}
                htmlFor={`luk-filter-${filter.id}`}>
              {filter.label}
            </Label>
            <CheckboxSelect
                name={filter.id}
                id={`luk-filter-${filter.id}`}
                borderless
                placeholder="Add filter"
                onChange={this.handleOnChangeFilter}
                options={options} />
          </div>
        );
      });

      return (
        <CardSegment vertical padding="sm">
          <InputGrid columns={filterFields.length} align="flex-start">
            {filterFieldComponents}
          </InputGrid>
        </CardSegment>
      );
    }

    return null;
  }

  render() {
    const { className } = this.props;
    return (
      <CardStack className={className}>
        <Card>
          { this.renderSearchFieldsSegment() }
          { this.renderFiltersSegment() }
        </Card>
        { this.renderFilteredSearchResults() }
      </CardStack>
    );
  }
}

export default Search;
export type { Props as SearchProps };
