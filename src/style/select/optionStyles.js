import {
  NEUTRAL,
} from '../../colors/src/Colors';

const optionStyles = (base, state) => {

  const {
    isCheckBoxOption,
    isDisabled,
    isFocused,
    isSelected,
  } = state;

  let color = NEUTRAL.N900;
  if (isDisabled) {
    color = NEUTRAL.N500;
  }

  let backgroundColor = 'white';
  if (isSelected) {
    backgroundColor = NEUTRAL.N100;
  }
  else if (isFocused) {
    backgroundColor = NEUTRAL.N100;
  }

  const activeBgColor = isDisabled ? NEUTRAL.N50 : NEUTRAL.N200;
  const hoverBgColor = isDisabled ? NEUTRAL.N50 : NEUTRAL.N100;

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
