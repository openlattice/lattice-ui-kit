// @flow
import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import Label from '../../../label';
import Input from '../../..';


type Props = {

};

type State = {
  id :string;
}

class TextField extends Component<Props, State> {
  constructor(props :Props) {
    super(props);
    this.state = {
      id: uniqueId('textfield_')
    };
  }

  render() {
    return (
      <div>
        <Label>Test</Label>
        <Input />
      </div>
    );
  }
}

export default TextField;
