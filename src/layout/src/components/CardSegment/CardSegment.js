// @flow
import styled, { css } from 'styled-components';

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
