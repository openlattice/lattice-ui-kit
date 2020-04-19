import { NEUTRALS } from '../../colors/src/Colors';

const singleValueStyles = (base, state) => {
  const { selectProps } = state;

  const styles = {
    ...base,
    color: state.isDisabled ? NEUTRALS[1] : 'inherit',
  };

  if (selectProps && selectProps.inputIcon) {
    styles.maxWidth = 'calc(100% - 32px)';
  }

  return styles;
};
export default singleValueStyles;
