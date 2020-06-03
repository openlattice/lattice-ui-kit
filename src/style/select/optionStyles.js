import {
  NEUTRAL,
  NEUTRALS,
  PURPLE,
} from '../../colors/src/Colors';

const optionStyles = (base, state) => {

  const {
    isCheckBoxOption,
    isDisabled,
    isFocused,
    isSelected,
  } = state;

  let color = isSelected ? PURPLE.P300 : NEUTRALS[0];
  if (isDisabled) {
    color = NEUTRALS[2];
  }

  let backgroundColor = 'white';
  if (isSelected) {
    backgroundColor = NEUTRAL.N50;
  }
  else if (isFocused) {
    backgroundColor = NEUTRALS[6];
  }

  const activeBgColor = isDisabled ? 'white' : PURPLE.P100;
  const hoverBgColor = isDisabled ? 'white' : NEUTRALS[6];

  let style = {
    color,
    fontSize: '0.875rem',
    backgroundColor,
    ':active': {
      backgroundColor: activeBgColor,
    },
    ':active:hover': {
      backgroundColor: activeBgColor,
    },
    ':hover': {
      backgroundColor: hoverBgColor,
    },
  };

  if (isCheckBoxOption) {
    style = {
      ...style,
      display: 'flex',
      flex: '1 1 auto',
      padding: '0 10px',
      width: '100%',
    };
  }

  return { ...base, ...style };
};

export default optionStyles;
