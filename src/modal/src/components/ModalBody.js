/*
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { Node } from 'react';

import { BodySection } from './styled/StyledModalComponents';

type Props = {
  children :Node;
};

export default class ModalBody extends Component<Props> {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {

    const { children } = this.props;
    return (
      <BodySection>
        { children }
      </BodySection>
    );
  }
}
