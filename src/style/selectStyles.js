import { NEUTRALS, PURPLES, WHITE } from '../colors/src/Colors';

const selectStyles = {
  container: (base, state) => {
    const { isDisabled } = state;
    return {
      ...base,
      cursor: isDisabled ? 'not-allowed' : 'default',
      pointerEvents: 'auto',
      width: '100%'
    };
  },
  control: (base, state) => {
    const { isFocused, isDisabled, selectProps } = state;
    const { borderless } = selectProps;
    const defaultBorder = borderless ? 'none' : `solid 1px ${NEUTRALS[4]}`;
    const defaultBackgroundColor = borderless ? 'transparent' : NEUTRALS[8];

    const style = {
      backgroundColor: isFocused ? WHITE : defaultBackgroundColor,
      border: (isFocused && !borderless) ? `solid 1px ${PURPLES[1]}` : defaultBorder,
      borderRadius: '3px',
      boxShadow: 'none',
      fontSize: '14px',
      minHeight: '40px',
      pointerEvents: isDisabled ? 'none' : 'auto',
      transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
      ':hover': {
        backgroundColor: isFocused ? WHITE : NEUTRALS[6],
        border: (isFocused && !borderless) ? `solid 1px ${PURPLES[1]}` : defaultBorder,
      },
    };
    return { ...base, ...style };
  },
  menuPortal: (base) => ({ ...base, zIndex: 550 }),
  menu: (base, state) => {
    const { selectProps } = state;
    const display = (selectProps && selectProps.hideMenu) ? 'none' : 'block';
    return { ...base, display, zIndex: 550 };
  },
  option: (base, state) => {
    const { isDisabled, isFocused, isSelected } = state;
    let color = isSelected ? PURPLES[1] : NEUTRALS[0];
    if (isDisabled) color = NEUTRALS[2];

    let backgroundColor = WHITE;

    if (isSelected) {
      backgroundColor = PURPLES[6];
    }
    else if (isFocused) {
      backgroundColor = NEUTRALS[6];
    }

    const activeBgColor = isDisabled ? WHITE : PURPLES[5];
    const hoverBgColor = isDisabled ? WHITE : NEUTRALS[6];

    return {
      ...base,
      color,
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
  },
  singleValue: (base, state) => {
    const { isDisabled } = state;
    return { ...base, color: isDisabled ? NEUTRALS[1] : 'inherit' };
  },
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: (base) => ({ ...base, marginRight: '10px', color: NEUTRALS[2] }),
  clearIndicator: (base) => ({ ...base, padding: '0', margin: '5px' }),
  dropdownIndicator: (base, state) => {
    const { selectProps } = state;
    const style = {
      color: NEUTRALS[2],
      padding: '0',
      margin: '5px',
      display: selectProps && selectProps.hideMenu ? 'none' : 'flex'
    };
    return { ...base, ...style };
  },
};

export default selectStyles;
