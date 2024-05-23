import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Textarea, TextareaProps } from "../ui/textarea";

const DarkFormTextarea = forwardRef<HTMLInputElement, TextareaProps>(
  (props, ref) => {
    return (
      <Textarea
        {...props}
        className={twMerge(
          "min-w-0 flex-1 !mt-0 bg-transparent rounded-none border-none focus-visible:ring-[#404040] focus-visible:ring-offset-[#404040] min-h-40",
          props.className
        )}
      />
    );
  }
);

DarkFormTextarea.displayName = "DarkFormTextarea";
export default DarkFormTextarea;
