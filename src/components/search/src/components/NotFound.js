// @flow
import React from 'react';
import styled from 'styled-components';
import { faSearchMinus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FigureWrapper = styled.figure`
  margin: 30px auto;
  text-align: center;

  figcaption {
    color: #8e929b;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 20px auto;
    text-align: center;
    width: 100%;
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
