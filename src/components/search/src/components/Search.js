// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';

import InputGrid from './styled/InputGrid';
import Title from './styled/Title';
import LabelWrapper from './styled/LabelWrapper';
import Input from '../../../../input';
import Label from '../../../../label';
import Button from '../../../../button';
import DatePicker from '../../../../datetime/src/components/DatePicker';
import { Select } from '../../../../select';
import { Card, CardSegment } from '../../../../layout';

import type { SearchFieldDefinition, FilterFieldDefinition } from '../../types';

type Props = {
  searchFields ? :SearchFieldDefinition[];
  filterFields ? :FilterFieldDefinition[];
  title :string;
  onSearch :() => void;
};

type State = {
  searchFieldValues :Map;
};

class Search extends Component<Props, State> {

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
  }

  constructor(props :Props) {
    super(props);

    const searchFieldValues = Map().withMutations((map :Map) => {
      // $FlowFixMe optional not recognizing defaultProps
      props.searchFields.forEach((field :SearchFieldDefinition) => map.set(field.id, ''));
    });

    this.state = {
      searchFieldValues
    };
  }

  state = {
    searchFieldValues: Map()
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

  handleOnChangeFilter = () => {

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
          <InputGrid columns={searchFields.length + 1}>
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
        const options = filter.value.map(v => ({ ...filter, label: v, value: v }));
        return (
          <LabelWrapper key={`luk-filter-key-${filter.id}`}>
            <Label
                bold
                key={filter.id}
                htmlFor={`luk-filter-${filter.id}`}>
              {filter.label}
            </Label>
            <Select
                inputId={`luk-filter-${filter.id}`}
                borderless
                defaultValue={options[0]}
                onChange={this.handleOnChangeFilter}
                options={options} />
          </LabelWrapper>
        );
      });

      return (
        <CardSegment padding="md">
          <InputGrid columns={filterFields.length}>
            {filterFieldComponents}
          </InputGrid>
        </CardSegment>
      );
    }

    return null;
  }

  render() {
    return (
      <Card>
        { this.renderSearchFieldsSegment() }
        { this.renderFiltersSegment() }
      </Card>
    );
  }
}

export default Search;
