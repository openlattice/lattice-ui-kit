// @flow
import { useMemo } from 'react';
import type { DateTime } from 'luxon';
import { ENTER_KEY_CODE } from '../../../../utils/keycodes';

// Provide reference equality InputProps with onKeyDown event
// For Mui Pickers only

const useInputPropsMemo = (lastValidDate :?DateTime, setSelectedDate :(date :?DateTime) => void) => {
  const inputProps = useMemo(() => ({
    onKeyDown: (e :SyntheticKeyboardEvent<HTMLInputElement>) => {
      if (e.key === ENTER_KEY_CODE) {
        e.preventDefault();
      }
    },
    onBlur: () => {
      setSelectedDate(lastValidDate);
    }
  }), [lastValidDate, setSelectedDate]);

  return inputProps;
};

export default useInputPropsMemo;
