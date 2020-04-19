const valueContainerStyles = (base, state) => {
  const { selectProps } = state;
  let padding = '0 10px';

  if (selectProps && selectProps.inputIcon) {
    padding = '0 10px 0 34px';
  }

  return { ...base, padding };
};
export default valueContainerStyles;
