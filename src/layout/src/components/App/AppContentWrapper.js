/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import AppContentInnerWrapper from './styled/AppContentInnerWrapper';
import AppContentOuterWrapper from './styled/AppContentOuterWrapper';

type Props = {
  bgColor :?string;
  borderless :boolean;
  children :Node;
  className :?string;
  padding :?string;
};

const AppContentWrapper = ({
  bgColor,
  borderless,
  children,
  className,
  padding,
} :Props) => (
  <AppContentOuterWrapper bgColor={bgColor} borderless={borderless} className={className}>
    <AppContentInnerWrapper padding={padding}>
      {children}
    </AppContentInnerWrapper>
  </AppContentOuterWrapper>
);


AppContentWrapper.defaultProps = {
  bgColor: undefined,
  borderless: false,
  className: undefined,
  padding: undefined,
};

export default AppContentWrapper;
