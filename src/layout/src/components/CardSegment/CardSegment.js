// @flow
import styled, { css } from 'styled-components';

type ComputedSegmentProps = {
  bgColor :string;
  noBleed :boolean;
  onClick :() => void;
  padding :'sm' | 'md';
  vertical :boolean;
};

const getSegmentComputedStyles = (props :ComputedSegmentProps) => {
  const {
    bgColor,
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

  const finalMargin = noBleed ? '0 30px' : '0';
  const lrPadding = noBleed ? '0' : '30px';

  let finalPadding = `30px ${lrPadding}`;
  if (padding === 'sm') {
    finalPadding = `10px ${lrPadding}`;
  }
  else if (padding === 'md') {
    finalPadding = `20px ${lrPadding}`;
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
`;

export default CardSegment;
export {
  getSegmentComputedStyles,
};
