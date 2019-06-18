// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const FigureWrapper = styled.figure`
  margin: 10px auto;
  text-align: center;

  figcaption {
    color: #8e929b;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 10px auto 0 auto;
    text-align: center;
    width: 100%;
  }
`;

type Props = {
  caption ? :string;
  icon ? :IconDefinition;
  size ? :string;
}

const IconSplash = ({ caption, icon, size } :Props) => (
  <FigureWrapper>
    {
      icon
        ? <FontAwesomeIcon icon={icon} size={size} fixedWidth />
        : null
    }
    <figcaption>{caption}</figcaption>
  </FigureWrapper>
);

IconSplash.defaultProps = {
  caption: '',
  icon: undefined,
  size: '5x'
};

export default IconSplash;
