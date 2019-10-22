// @flow
import { useMemo } from 'react';
import { ENTER_KEY_CODE } from '../../../../utils/keycodes';

// Provide reference equality InputProps with onKeyDown event
// For Mui Pickers only

const useInputPropsMemo = () => {
  const inputProps = useMemo(() => ({
    onKeyDown: (e :SyntheticKeyboardEvent<HTMLInputElement>) => {
      if (e.key === ENTER_KEY_CODE) {
        e.preventDefault();
      }
    }
  }), []);

  return inputProps;
};

export default useInputPropsMemo;
