// @flow
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faTimesOctagon } from '@fortawesome/pro-solid-svg-icons';

import type { IconDefinition } from '@fortawesome/react-fontawesome';
import type { ComponentType } from 'react';

import { Container, Content, IconWrapper } from './styled/StyledBannerComponents';
import { getStyleVariation } from '../../../utils/StyleUtils';

const DEFAULT_BANNER_HEIGHT = '60px';

type Props = {
  children ? :Node;
  icon ? :IconDefinition | ComponentType<any>;
  isOpen ? :boolean;
  maxHeight ? :string;
  mode ? :'default' | 'danger' | 'success' | 'warning';
  sticky :boolean;
}

class Banner extends Component<Props> {

  static defaultProps = {
    children: undefined,
    icon: undefined,
    isOpen: false,
    maxHeight: DEFAULT_BANNER_HEIGHT,
    mode: undefined,
  };

  renderIcon = () => {
    const { icon } = this.props;

    const modeIcon = getStyleVariation('mode', {
      danger: faTimesOctagon,
      success: faCheckCircle,
      warning: faExclamationTriangle
    })(this.props);

    if (icon) {
      if (typeof icon === 'function') {
        return (
          <IconWrapper>
            { icon() }
          </IconWrapper>
        );
      }

      return <FontAwesomeIcon icon={icon} fixedWidth />;
    }

    if (modeIcon) {
      return (
        <IconWrapper>
          <FontAwesomeIcon icon={modeIcon} fixedWidth />
        </IconWrapper>
      );
    }
    return null;
  }

  render() {
    const {
      children,
      isOpen,
      maxHeight,
      mode,
      sticky
    } = this.props;

    return (
      <Container
          isOpen={isOpen}
          maxHeight={maxHeight}
          mode={mode}
          sticky={sticky}>
        <Content>
          { this.renderIcon() }
          { children }
        </Content>
      </Container>
    );
  }
}

export default Banner;
