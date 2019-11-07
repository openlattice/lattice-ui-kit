import { NEUTRALS } from '../../colors/src/Colors';

const dropdownIndicatorStyles = (base, state) => ({
  display: state.selectProps && state.selectProps.hideMenu ? 'none' : 'flex',
  color: NEUTRALS[2],
  margin: '5px',
  padding: '0',
});

export default dropdownIndicatorStyles;
