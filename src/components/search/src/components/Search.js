// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';

import InputGrid from './styled/InputGrid';
import Input from '../../../../input';
import Label from '../../../../label';
import Button from '../../../../button';
import DatePicker from '../../../../datetime/src/components/DatePicker';
import { Card, CardSegment } from '../../../../layout';
import type { SearchFieldDefinition } from '../../types';

type Props = {
  searchFields :SearchFieldDefinition[];
};

type State = {
  searchFieldValues :Map;
};

class Search extends Component<Props, State> {

  state = {
    searchFieldValues: Map()
  }

  handleOnChangeSearchField = (e :SyntheticEvent<HTMLInputElement>) => {
    console.log(e);
  }

  handleOnClickSearchButton = (e :SyntheticEvent<HTMLButtonElement>) => {
    console.log(e);
  }

  renderSearchFieldsSegment = () => {

    const { searchFields } = this.props;
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
        <div>
          <Label key={field.id} htmlFor={field.id}>
            {field.label}
          </Label>
          {fieldComponent}
        </div>
      );
    });

    return (
      <CardSegment vertical>
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
        <CardSegment padding="md">
          Filters
        </CardSegment>
        { this.renderSearchFieldsSegment() }
      </Card>
    );
  }
}

export default Search;
