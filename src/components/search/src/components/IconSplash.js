// @flow
import { Component } from 'react';
import type { ComponentType } from 'react';

import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NEUTRAL } from '../../../../colors';

const FigureWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  text-align: center;

  > div:first-child {
    margin-bottom: 10px;
  }

  figcaption {
    color: ${NEUTRAL.N500};
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
`;

type Props = {
  className ? :string;
  /** Caption that renders underneath the icon */
  caption ? :string;
  /** Either a FontAwesome IconDefinition or a render prop */
  icon ? :IconDefinition | ComponentType<any>;
  /** size string that is passed to the FontAwesomeIcon or icon render prop */
  size ? :string;
}

class IconSplash extends Component<Props> {
  static defaultProps = {
    className: undefined,
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
    const { className, caption } = this.props;
    return (
      <FigureWrapper className={className}>
        { this.renderIcon() }
        <figcaption>{caption}</figcaption>
      </FigureWrapper>
    );
  }
}

export default IconSplash;
