"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type ContextValue = boolean;

const defaultValue: ContextValue = false;

export const InitialLoadContext = createContext(defaultValue);

export function InitialLoadProvider(props: { children: ReactNode }) {
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoadDone(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <InitialLoadContext.Provider value={initialLoadDone}>
      {props.children}
    </InitialLoadContext.Provider>
  );
}
