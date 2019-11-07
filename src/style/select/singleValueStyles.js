import { NEUTRALS } from '../../colors/src/Colors';

const singleValueStyles = (base, state) => ({ ...base, color: state.isDisabled ? NEUTRALS[1] : 'inherit' });
export default singleValueStyles;
