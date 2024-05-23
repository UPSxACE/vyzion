import { Button, ButtonProps } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonProps {}

export default function MobileNavbarItem(props: Props) {
  return (
    <Button
      {...props}
      className={twMerge(
        "text-zinc-300 !bg-[#0f1214] px-2 py-4 border-b border-[#404040] h-auto text-md lg:hidden block text-left rounded-none",
        props.className
      )}
    >
      {props.children}
    </Button>
  );
}
