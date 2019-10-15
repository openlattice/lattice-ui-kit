// @flow
import { useEffect } from 'react';

// https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
const useKeydownListener = (keyCode :string, listener :() => any, enable :boolean = true) => {

  useEffect(() => {
    function handleListener(event :KeyboardEvent) {
      if (enable && event.key === keyCode) {
        listener();
      }
    }

    document.addEventListener('keydown', handleListener, false);

    return () => {
      document.removeEventListener('keydown', handleListener, false);
    };
  }, [keyCode, enable, listener]);
};

export default useKeydownListener;
