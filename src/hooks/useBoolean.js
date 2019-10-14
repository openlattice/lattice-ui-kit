// @flow
import { useCallback, useState, useEffect } from 'react';

const useBoolean = (initialValue :boolean = false) => {
  const [state, setState] = useState(initialValue);
  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  return [state, setTrue, setFalse];
};

export default useBoolean;
