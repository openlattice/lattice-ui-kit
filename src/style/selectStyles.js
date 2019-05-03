import { NEUTRALS, PURPLES } from '../colors/src/Colors';

const selectStyles = {
  container: (base, state) => {
    const { isDisabled } = state;
    return {
      ...base,
      cursor: isDisabled ? 'not-allowed' : 'default',
      pointerEvents: 'auto'
    };
  },
  control: (base, state) => {
    const { isFocused, isDisabled } = state;
    const style = {
      backgroundColor: isFocused ? 'white' : NEUTRALS[8],
      border: isFocused ? `solid 1px ${PURPLES[1]}` : `solid 1px ${NEUTRALS[4]}`,
      borderRadius: '3px',
      boxShadow: 'none',
      fontSize: '14px',
      marginTop: '10px',
      minHeight: '44px',
      pointerEvents: isDisabled ? 'none' : 'auto',
      ':hover': {
        backgroundColor: isFocused ? 'white' : NEUTRALS[6],
        border: isFocused ? `solid 1px ${PURPLES[1]}` : `solid 1px ${NEUTRALS[4]}`,
      },
    };
    return { ...base, ...style };
  },
  menuPortal: base => ({ ...base, zIndex: 550 }),
  menu: (base, state) => {
    const { selectProps } = state;
    const display = (selectProps && selectProps.hideMenu) ? 'none' : 'block';
    return { ...base, display };
  },
  option: (base, state) => {
    const { isFocused, isSelected } = state;
    const color = isSelected ? PURPLES[1] : NEUTRALS[0];
    let backgroundColor = 'white';

    if (isSelected) {
      backgroundColor = PURPLES[6];
    }
    else if (isFocused) {
      backgroundColor = NEUTRALS[6];
    }

    return {
      ...base,
      color,
      backgroundColor,
      ':active': {
        backgroundColor: PURPLES[5]
      }
    };
  },
  singleValue: (base, state) => {
    const { isDisabled } = state;
    return { ...base, color: isDisabled ? NEUTRALS[1] : 'inherit' };
  },
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: base => ({ ...base, marginRight: '10px', color: NEUTRALS[2] }),
  clearIndicator: base => ({ ...base, padding: '0', margin: '5px' }),
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
