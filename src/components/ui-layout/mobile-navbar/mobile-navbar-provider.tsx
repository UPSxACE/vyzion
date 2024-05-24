"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextValue = [boolean, Dispatch<SetStateAction<boolean>>];

const defaultValue: ContextValue = [false, () => false];

export const MobileNavbarStateContext = createContext(defaultValue);

export function MobileNavbarProvider(props: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <MobileNavbarStateContext.Provider value={[open, setOpen]}>
      {props.children}
    </MobileNavbarStateContext.Provider>
  );
}
