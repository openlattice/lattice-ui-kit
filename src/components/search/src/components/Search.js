// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';

import InputGrid from './styled/InputGrid';
import Title from './styled/Title';
import Input from '../../../../input';
import Label from '../../../../label';
import Button from '../../../../button';
import DatePicker from '../../../../datetime/src/components/DatePicker';
import { Card, CardSegment } from '../../../../layout';

import type { SearchFieldDefinition } from '../../types';

type Props = {
  searchFields ? :SearchFieldDefinition[];
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
    ]
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

  renderSearchFieldsSegment = () => {

    const { searchFields, title } = this.props;
    const { searchFieldValues } = this.state;

    // $FlowFixMe optional not recognizing defaultProps
    const searchFieldComponents = searchFields.map((field :SearchFieldDefinition) => {

      let fieldComponent = (
        <Input
            name={field.id}
            onChange={this.handleOnChangeInput}
            value={searchFieldValues.get(field.id)} />
      );

      // TODO: More flexible method for handling checkboxes, dropdowns, etc.
      if (field.type === 'date') {
        fieldComponent = (
          <DatePicker
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
          <InputGrid>
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

  render() {
    return (
      <Card>
        { this.renderSearchFieldsSegment() }
        <CardSegment padding="md">
          Filters
        </CardSegment>
      </Card>
    );
  }
}

export default Search;
