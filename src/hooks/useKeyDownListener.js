// @flow
import { useEffect } from 'react';

// https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
const useKeyDownListener = (keyCode :string, listener :(event :KeyboardEvent) => any, enable :boolean = true) => {

  useEffect(() => {
    function handleListener(event :KeyboardEvent) {
      if (enable && event.key === keyCode) {
        listener(event);
      }
    }

    document.addEventListener('keydown', handleListener, false);

    return () => {
      document.removeEventListener('keydown', handleListener, false);
    };
  }, [keyCode, enable, listener]);
};

export default useKeyDownListener;
