import {
  NEUTRALS,
  PURPLE,
  RED_1,
  WHITE
} from '../../colors/src/Colors';

const controlStyles = (base, state) => {

  const {
    isFocused,
    isDisabled,
    selectProps
  } = state;

  let backgroundColor = isFocused ? WHITE : NEUTRALS[8];
  let border = isFocused ? `solid 1px ${PURPLE.P300}` : `solid 1px ${NEUTRALS[4]}`;

  if (selectProps && selectProps.borderless) {
    backgroundColor = 'transparent';
    border = 'none';
  }

  if (selectProps && selectProps.invalid) {
    border = selectProps.invalid ? `solid 1px ${RED_1}` : border;
  }

  const hoverBgColor = (isDisabled || isFocused) ? WHITE : NEUTRALS[6];

  const style = {
    backgroundColor,
    border,
    borderRadius: '3px',
    boxShadow: 'none',
    fontSize: '14px',
    lineHeight: 1.5,
    minHeight: '40px',
    pointerEvents: isDisabled ? 'none' : 'auto', // not sure what this was for
    transition: 'background-color 0.2s ease-out, border-color 0.2s ease-out',
    ':hover': {
      border,
      backgroundColor: hoverBgColor,
    },
  };

  return { ...base, ...style };

};

export default controlStyles;
