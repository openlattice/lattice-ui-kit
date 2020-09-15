/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import AppContentInnerWrapper from './styled/AppContentInnerWrapper';
import AppContentOuterWrapper from './styled/AppContentOuterWrapper';

const AppContentWrapper = ({
  bgColor,
  borderless,
  children,
  className,
} :{|
  bgColor ?:string;
  borderless :boolean;
  children :Node;
  className ?:string;
|}) => (
  <AppContentOuterWrapper bgColor={bgColor} borderless={borderless} className={className}>
    <AppContentInnerWrapper>
      {children}
    </AppContentInnerWrapper>
  </AppContentOuterWrapper>
);

AppContentWrapper.defaultProps = {
  bgColor: undefined,
  borderless: false,
  className: undefined,
};

export default AppContentWrapper;
