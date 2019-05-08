// @flow
import React, { Component } from 'react';
import { Card, CardSegment, CardStack } from '../../../../layout';

type Props = {

};

type State = {

};

class Search extends Component<Props, State> {

  constructor(props :Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardSegment padding="md">
          Filters
        </CardSegment>
        <CardSegment>
          Fields
        </CardSegment>
      </Card>
    );
  }
}

export default Search;
