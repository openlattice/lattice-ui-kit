// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { ComponentType } from 'react';

import { NEUTRALS } from '../../../../colors';

const FigureWrapper = styled.figure`
  margin: 10px auto;
  text-align: center;

  > div:first-child {
    margin-bottom: 10px;
  }

  figcaption {
    color: ${NEUTRALS[1]};
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
`;

type Props = {
  /** Caption that renders underneath the icon */
  caption ? :string;
  /** Either a FontAwesome IconDefinition or a render prop */
  icon ? :IconDefinition | ComponentType<any>;
  /** size string that is passed to the FontAwesomeIcon or icon render prop */
  size ? :string;
}

class IconSplash extends Component<Props> {
  static defaultProps = {
    caption: '',
    icon: undefined,
    size: '5x'
  };

  renderIcon = () => {
    const { icon, size } = this.props;
    if (icon) {
      const content = typeof icon === 'function'
        ? icon(size)
        : <FontAwesomeIcon icon={icon} size={size} fixedWidth />;
      return <div>{content}</div>;
    }
    return null;
  }

  render() {
    const { caption } = this.props;
    return (
      <FigureWrapper>
        { this.renderIcon() }
        <figcaption>{caption}</figcaption>
      </FigureWrapper>
    );
  }
}

export default IconSplash;
