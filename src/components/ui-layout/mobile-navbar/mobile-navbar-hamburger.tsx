"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { MobileNavbarStateContext } from "./mobile-navbar-provider";

interface Props extends ButtonProps {}

export default function MobileNavbarHamburger(props: Props) {
  const [_, setOpen] = useContext(MobileNavbarStateContext);

  function toggle() {
    setOpen((state) => !state);
  }

  return (
    <Button
      onClick={toggle}
      {...props}
      className={twMerge(
        "text-white !bg-transparent !border-none px-2 py-2 text-3xl lg:hidden",
        props.className
      )}
    >
      <RxHamburgerMenu />
    </Button>
  );
}
