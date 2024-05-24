"use client";

import { HTMLAttributes, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { MobileNavbarStateContext } from "./mobile-navbar-provider";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function MobileNavbarContent(props: Props) {
  const [open, setOpen] = useContext(MobileNavbarStateContext);

  function toggle() {
    setOpen((state) => !state);
  }

  return (
    <div
      onClick={() => {
        setOpen(false);
      }}
      {...props}
      className={twMerge(
        "flex-col lg:hidden z-40",
        open ? "flex" : "hidden",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
