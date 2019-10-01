/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import { AppContentInnerWrapper, AppContentOuterWrapper } from './styled/StyledContentComponents';

type Props = {
  bgColor :?string;
  children :Node;
  className :?string;
  contentWidth :?number;
};

const AppContentWrapper = ({
  bgColor,
  children,
  className,
  contentWidth,
} :Props) => (
  <AppContentOuterWrapper bgColor={bgColor} className={className}>
    <AppContentInnerWrapper contentWidth={contentWidth}>
      {children}
    </AppContentInnerWrapper>
  </AppContentOuterWrapper>
);


AppContentWrapper.defaultProps = {
  bgColor: undefined,
  className: undefined,
  contentWidth: undefined,
};

export default AppContentWrapper;
