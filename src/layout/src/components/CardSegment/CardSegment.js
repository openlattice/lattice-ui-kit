/*
 * @flow
 */

import isFunction from 'lodash/isFunction';
import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../../../colors';

type ComputedSegmentProps = {
  bgColor ?:string;
  indent ?:number;
  noBleed ?:boolean;
  noBorder ?:boolean;
  onClick ?:() => void;
  padding ?:string;
  vertical ?:boolean;
};

const getSegmentComputedStyles = (props :ComputedSegmentProps) => {

  const {
    bgColor,
    indent,
    noBleed,
    noBorder,
    onClick,
    padding,
    vertical,
  } = props;

  let backgroundColor = 'transparent';
  if (bgColor) {
    backgroundColor = `${bgColor}`;
  }

  let cursor = 'inherit';
  if (isFunction(onClick)) {
    cursor = 'pointer';
  }

  let indentation :number = 0;
  if (typeof indent === 'number' && indent > 0) {
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

  let borderBottom;
  if (!noBorder) {
    borderBottom = `1px solid ${NEUTRALS[4]}`;
  }

  const styles = css`
    border-bottom: ${borderBottom};
    background-color: ${backgroundColor};
    flex-direction: ${flexDirection};
    margin: ${finalMargin};
    padding: ${finalPadding};

    &:hover {
      cursor: ${cursor};
    }
  `;

  return styles;
};

const CardSegment = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  ${getSegmentComputedStyles}

  &:first-child {
    border-radius: 3px 3px 0 0;
  }

  &:last-child {
    border-bottom: 0;
    border-radius: 0 0 3px 3px;
  }
`;

export default CardSegment;
export {
  getSegmentComputedStyles,
};
