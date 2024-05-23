import { LabelProps } from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";
import { FormLabel } from "../ui/form";

interface Props extends LabelProps {}

export default function DarkFormLabel(props: Props) {
  return (
    <FormLabel
      {...props}
      className={twMerge(
        "bg-[#07080a] min-w-0 !w-40 flex items-start !p-3",
        props.className
      )}
    >
      {props.children}
    </FormLabel>
  );
}
