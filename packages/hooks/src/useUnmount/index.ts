import { useEffect, useRef } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

const useUnmount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useRef(fn);

  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
};

export default useUnmount;
