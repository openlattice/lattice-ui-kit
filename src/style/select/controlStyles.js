import {
  NEUTRAL,
  RED,
} from '../../colors/src/Colors';

const controlStyles = (base, state) => {

  const {
    isFocused,
    isDisabled,
    selectProps
  } = state;

  let backgroundColor = NEUTRAL.N50;
  let border = isFocused ? `solid 1px ${NEUTRAL.N700}` : `solid 1px ${NEUTRAL.N50}`;

  if (selectProps && selectProps.borderless) {
    backgroundColor = 'transparent';
    border = 'none';
  }

  if (selectProps && selectProps.invalid) {
    border = selectProps.invalid ? `solid 1px ${RED.R300}` : border;
  }

  const hoverBgColor = (isDisabled || isFocused) ? NEUTRAL.N00 : NEUTRAL.N100;

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
