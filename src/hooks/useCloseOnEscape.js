// @flow
import { useEffect } from 'react';

const ESC_KEY_CODE :'Escape' = 'Escape';

// https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
const useCloseOnEscape = (shouldCloseOnEscape :boolean = false, onClose :() => any) => {

  useEffect(() => {
    function handleClose(event :KeyboardEvent) {
      if (shouldCloseOnEscape && event.key === ESC_KEY_CODE) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleClose, true);

    return () => {
      document.removeEventListener('keydown', handleClose, true);
    };
  }, [shouldCloseOnEscape, onClose]);
};

export default useCloseOnEscape;
