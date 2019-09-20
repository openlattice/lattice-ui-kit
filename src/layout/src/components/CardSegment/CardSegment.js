/*
 * @flow
 */

import styled, { css } from 'styled-components';

import * as Colors from '../../../../colors';

const { NEUTRALS } = Colors;

type ComputedSegmentProps = {
  bgColor ?:string;
  indent ?:number;
  noBleed ?:boolean;
  onClick ?:() => void;
  padding ?:string;
  vertical ?:boolean;
};

const getSegmentComputedStyles = (props :ComputedSegmentProps) => {
  const {
    bgColor,
    indent,
    noBleed,
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

  let indentation :number = 0;
  if (typeof indent === 'number') {
    indentation = 10 * indent;
  }

  let finalMargin = '0';
  if (noBleed) {
    finalMargin = `0 30px 0 ${30 + indentation}px`;
  }

  let paddingLeft = `${30 + indentation}px`;
  let paddingRight = '30px';
  if (noBleed) {
    paddingLeft = '0';
    paddingRight = '0';
  }

  let finalPadding = `30px ${paddingRight} 30px ${paddingLeft}`;
  if (padding === 'sm') {
    finalPadding = `10px ${paddingRight} 10px ${paddingLeft}`;
  }
  else if (padding === 'md') {
    finalPadding = `20px ${paddingRight} 20px ${paddingLeft}`;
  }
  else if (typeof padding === 'string') {
    finalPadding = padding;
  }

  let flexDirection = 'row';
  if (vertical) {
    flexDirection = 'column';
  }

  const styles = css`
    background-color: ${backgroundColor};
    flex-direction: ${flexDirection};
    margin: ${finalMargin};
    padding: ${finalPadding};
    &:hover {
      cursor: ${cursor}
    }
  `;

  return styles;
};

const CardSegment = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  ${getSegmentComputedStyles}

  & & {
    border-bottom: 1px solid ${NEUTRALS[4]};
  }

  & &:first-child {
    border-radius: 3px 3px 0 0;
  }

  & &:last-child {
    border-bottom: 0;
    border-radius: 0 0 3px 3px;
  }
`;

export default CardSegment;
export {
  getSegmentComputedStyles,
};
