// @flow
import React from 'react';
import styled from 'styled-components';
import { faSearchMinus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FigureWrapper = styled.figure`
  text-align: center;
  margin: 30px auto;

  figcaption {
    margin: 20px auto;
    line-height: 22px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #8e929b;
  }
`;

type Props = {
  caption ? :string;
  size ? :string;
}

const NotFound = ({ caption, size } :Props) => (
  <FigureWrapper>
    <FontAwesomeIcon icon={faSearchMinus} size={size} />
    <figcaption>{caption}</figcaption>
  </FigureWrapper>
);

NotFound.defaultProps = {
  caption: '',
  size: '5x'
};

export default NotFound;
