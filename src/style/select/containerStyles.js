const containerStyles = (base, state) => ({
  ...base,
  cursor: state.isDisabled ? 'not-allowed' : 'default',
  pointerEvents: 'auto', // not sure what this was for
  width: '100%',
});

export default containerStyles;
