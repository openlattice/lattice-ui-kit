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
      <CardStack>
        <Card>
          <CardSegment>
            top
          </CardSegment>
          <CardSegment>
            bottom
          </CardSegment>
        </Card>
        <Card>
          blank
        </Card>
      </CardStack>
    );
  }
}

export default Search;
