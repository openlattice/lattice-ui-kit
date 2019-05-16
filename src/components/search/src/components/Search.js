// @flow
import * as React from 'react';
import { Map, List } from 'immutable';

import SearchResultsContainer from './SearchResultsContainer';
import InputGrid from './styled/InputGrid';
import Title from './styled/Title';
import Input from '../../../../input';
import Label from '../../../../label';
import Button from '../../../../button';
import DatePicker from '../../../../datetime/src/components/DatePicker';
import { CheckboxSelect } from '../../../../select';
import { Card, CardSegment, CardStack } from '../../../../layout';

import type { SearchResultsProps } from './SearchResultsContainer';
import type { SearchFieldDefinition, FilterFieldDefinition } from '../../types';
import type { ReactSelectEvent, ReactSelectValue } from '../../../../select/types';

type Props = {
  filterFields ? :FilterFieldDefinition[];
  onSearch :() => void;
  searchFields ? :SearchFieldDefinition[];
  searchResults ? :List<Map>;
  title :string;
  resultsComponent ? :React.Element<any>;
  fetchState :any;
};

type State = {
  searchFieldValues :Map;
  filterFieldValues :Map;
};

class Search extends React.Component<Props, State> {

  static defaultProps = {
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
    filterFields: [],
    searchResults: List(),
    resultsComponent: SearchResultsContainer
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
    if (typeof onSearch === 'function') {
      onSearch();
    }
  }

  handleOnChangeFilter = (value ? :ReactSelectValue, event :ReactSelectEvent) => {
    const { filterFieldValues } = this.state;
    const { name } = event;
    this.setState({
      filterFieldValues: filterFieldValues.set(name, value)
    });
  }

  renderFilteredSearchResults = () :React.Element<React.ElementType<SearchResultsProps>> => {
    const {
      fetchState,
      filterFields,
      resultsComponent: ResultsComponent,
      searchResults,
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

    return <ResultsComponent results={filteredResults} fetchState={fetchState} />;
  }

  renderSearchFieldsSegment = () => {

    const { searchFields, title } = this.props;
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
          <InputGrid columns={searchFields.length + 1} align="flex-end">
            {searchFieldComponents}
            <Button
                type="submit"
                mode="primary"
                onClick={this.handleOnClickSearchButton}>
              Search
            </Button>
          </InputGrid>
        </form>
      </CardSegment>
    );
  }

  renderFiltersSegment = () => {

    const { filterFields } = this.props;
    if (Array.isArray(filterFields) && filterFields.length) {
      const filterFieldComponents = filterFields.map((filter :FilterFieldDefinition) => {
        const options = filter.options.map(v => ({ label: v, value: v }));
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
                inputId={`luk-filter-${filter.id}`}
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
    return (
      <CardStack>
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
