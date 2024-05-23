import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "../ui/button";

interface Props extends ButtonProps {}

export default function DarkFormSubmitButton(props: Props) {
  return (
    <Button
      {...props}
      className={twMerge(
        "border-none rounded-none bg-[#07080a] text-[#97959a] hover:bg-[#07080a]",
        props.className
      )}
      type="submit"
    >
      {props.children}
    </Button>
  );
}
