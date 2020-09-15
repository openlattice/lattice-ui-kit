// @flow
import { useMemo } from 'react';

import type { DateTime } from 'luxon';

import { ENTER } from '../../../../utils/keycodes';

// Provide reference equality InputProps with onKeyDown event
// For Mui Pickers only

const useInputPropsMemo = (lastValidDate :?DateTime, setSelectedDate :(date :?DateTime) => void) => {
  const inputProps = useMemo(() => ({
    onKeyDown: (e :SyntheticKeyboardEvent<HTMLInputElement>) => {
      if (e.key === ENTER) {
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
