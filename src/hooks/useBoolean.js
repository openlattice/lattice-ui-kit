// @flow
import { useCallback, useState, useEffect } from 'react';

type Props = [boolean, () => void, () => void];

const useBoolean = (initialValue :boolean = false) :Props => {
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
