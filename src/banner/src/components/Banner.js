// @flow
import { Component } from 'react';
import type { ComponentType } from 'react';

import { faCheckCircle, faExclamationTriangle, faTimesOctagon } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/react-fontawesome';

import { Container, Content, IconWrapper } from './styled/StyledBannerComponents';

import { getStyleVariation } from '../../../utils/StyleUtils';

const DEFAULT_BANNER_HEIGHT = '60px';

type Props = {
  className ? :string;
  children ? :Node;
  icon ? :IconDefinition | ComponentType<any>;
  isOpen ? :boolean;
  maxHeight ? :string;
  mode ? :'default' | 'danger' | 'success' | 'warning';
  sticky :boolean;
}

class Banner extends Component<Props> {

  static defaultProps = {
    className: undefined,
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

    const finalIcon = icon || modeIcon;

    if (finalIcon) {
      if (typeof finalIcon === 'function') {
        return (
          <IconWrapper>
            { finalIcon() }
          </IconWrapper>
        );
      }

      return (
        <IconWrapper>
          <FontAwesomeIcon icon={finalIcon} fixedWidth />
        </IconWrapper>
      );
    }

    return null;
  }

  render() {
    const {
      className,
      children,
      isOpen,
      maxHeight,
      mode,
      sticky
    } = this.props;

    return (
      <Container
          className={className}
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
