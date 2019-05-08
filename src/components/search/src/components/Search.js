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
  searchFields :SearchFieldDefinition[];
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

  state = {
    searchFieldValues: Map()
  }

  handleOnChangeSearchField = (e :SyntheticEvent<HTMLInputElement>) => {
    console.log(e);
  }

  handleOnClickSearchButton = (e :SyntheticEvent<HTMLButtonElement>) => {
    const { onSearch } = this.props;
    if (typeof onSearch === 'function') {
      onSearch();
    }
  }

  renderSearchFieldsSegment = () => {

    const { searchFields, title } = this.props;
    const { searchFieldValues } = this.state;

    const searchFieldComponents = searchFields.map((field :SearchFieldDefinition) => {

      let fieldComponent = (
        <Input
            id={field.id}
            onChange={this.handleOnChangeSearchField}
            value={searchFieldValues.get(field.id)} />
      );

      if (field.type === 'date') {
        fieldComponent = <DatePicker />;
      }

      return (
        <div key={`luk-search-${field.id}`}>
          <Label htmlFor={field.id}>
            {field.label}
          </Label>
          {fieldComponent}
        </div>
      );
    });

    return (
      <CardSegment vertical>
        { title && <Title>{title}</Title> }
        <InputGrid>
          {searchFieldComponents}
          <Button mode="primary" onClick={this.handleOnClickSearchButton}>Search</Button>
        </InputGrid>
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
