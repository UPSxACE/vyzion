import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "../ui/input";

const DarkFormInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      className={twMerge(
        "text-white min-w-0 flex-1 !mt-0 bg-transparent rounded-none border-none focus-visible:ring-[#404040] focus-visible:ring-offset-[#404040]",
        props.className
      )}
    />
  );
});

DarkFormInput.displayName = "DarkFormInput";
export default DarkFormInput;
