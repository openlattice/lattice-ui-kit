import { NEUTRAL } from '../../colors/src/Colors';

const dropdownIndicatorStyles = (base, state) => ({
  display: state.selectProps && state.selectProps.hideMenu ? 'none' : 'flex',
  color: NEUTRAL.N500,
  margin: '5px',
  padding: '0',
});

export default dropdownIndicatorStyles;
