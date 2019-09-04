/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';
import type { Props as ButtonProps } from './Button';

const IconMarginRight = styled.span`
  margin: 0 8px 0 0;
`;

type Props = {
  ...ButtonProps;
  icon ?:any;
};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/button
 * https://evergreen.surge.sh/components/buttons
 */
const IconButton = (props :Props) => {

  const { children, icon, ...rest } = props;

  if (!children) {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <Button {...rest}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    );
    /* eslint-enable */
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Button {...rest}>
      <IconMarginRight>
        <FontAwesomeIcon icon={icon} />
      </IconMarginRight>
      {children}
    </Button>
  );
  /* eslint-enable */
};

IconButton.defaultProps = {
  icon: undefined,
};

export default IconButton;

export type {
  Props,
};
