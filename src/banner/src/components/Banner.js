// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faTimesOctagon } from '@fortawesome/pro-solid-svg-icons';
import { Container, Content, IconWrapper } from './styled/StyledBannerComponents';
import { getStyleVariation } from '../../../utils/StyleUtils';

const DEFAULT_BANNER_HEIGHT = '60px';

type Props = {
  children ? :Node;
  icon ? :Node;
  isOpen ? :boolean;
  maxHeight ? :string;
  mode ? :'default' | 'danger' | 'success' | 'warning';
}

class Banner extends Component<Props> {

  static defaultProps = {
    children: undefined,
    icon: undefined,
    isOpen: false,
    maxHeight: DEFAULT_BANNER_HEIGHT,
    mode: 'default'
  };

  renderIcon = () => {
    const { icon } = this.props;

    const modeIcon = getStyleVariation('mode', {
      danger: faTimesOctagon,
      success: faCheckCircle,
      warning: faExclamationTriangle
    })(this.props);

    if (icon) {
      return (
        <IconWrapper>
          { icon }
        </IconWrapper>
      );
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
      mode
    } = this.props;

    return (
      <Container
          isOpen={isOpen}
          maxHeight={maxHeight}
          mode={mode}>
        <Content>
          { this.renderIcon() }
          { children }
        </Content>
      </Container>
    );
  }
}

export default Banner;
