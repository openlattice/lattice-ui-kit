/*
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import type { Node } from 'react';

import { BodySection } from './styled/StyledModalComponents';

type Props = {
  children :Node;
  viewportScrolling ? :boolean;
};

const ModalBody = (props :Props) => {
  const { children, viewportScrolling } = props;
  return (
    <BodySection viewportScrolling={viewportScrolling}>
      { children }
    </BodySection>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  viewportScrolling: PropTypes.bool
};

ModalBody.defaultProps = {
  viewportScrolling: false
};

export default ModalBody;
