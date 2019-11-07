const menuStyles = (base, state) => ({
  ...base,
  display: (state.selectProps && state.selectProps.hideMenu) ? 'none' : 'block',
  zIndex: 1000,
});
export default menuStyles;
