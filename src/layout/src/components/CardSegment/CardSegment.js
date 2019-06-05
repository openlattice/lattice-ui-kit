// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import type { ChildrenArray, Element } from 'react';

type ComputedSegmentProps = {
  bgColor :string;
  onClick :() => void;
  padding :'sm' | 'md';
  vertical :boolean;
};

const getSegmentComputedStyles = (props :ComputedSegmentProps) => {
  const {
    bgColor,
    onClick,
    padding,
    vertical,
  } = props;

  let backgroundColor = 'transparent';
  if (bgColor) {
    backgroundColor = `${bgColor}`;
  }

  let cursor = 'auto';
  if (onClick) {
    cursor = 'pointer';
  }

  let finalPadding = '30px';
  if (padding === 'sm') {
    finalPadding = '10px 30px';
  }
  else if (padding === 'md') {
    finalPadding = '20px 30px';
  }

  let flexDirection = 'row';
  if (vertical) {
    flexDirection = 'column';
  }

  const styles = css`
    background-color: ${backgroundColor};
    flex-direction: ${flexDirection};
    padding: ${finalPadding};
    &:hover {
      cursor: ${cursor}
    }
  `;

  return styles;
};

type ComputedHeaderProps = {
  children :ChildrenArray<any> | Element<any>;
};

const getHeaderComputedStyles = ({ children } :ComputedHeaderProps) => {
  if (React.Children.count(children) > 1) {
    return css`
      margin: 0 0 30px 0;
    `;
  }
  return css`
    align-items: center;
    margin: 0;
  `;
};

const CardSegment = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  ${getSegmentComputedStyles}

  & > header {
    display: flex;
    flex: 1 0 auto;
    flex-direction: row;
    justify-content: space-between;
    ${getHeaderComputedStyles}

    & > h1 {
      font-size: 18px;
      font-weight: normal;
      line-height: normal;
      margin: 0;
    }

    & > h2 {
      font-size: 16px;
      font-weight: normal;
      line-height: normal;
      margin: 0;
    }

    & > h3 {
      font-size: 14px;
      font-weight: normal;
      line-height: normal;
      margin: 0;
    }
  }
`;

export default CardSegment;
export {
  getHeaderComputedStyles,
  getSegmentComputedStyles,
};
