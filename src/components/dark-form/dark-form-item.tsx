import { twMerge } from "tailwind-merge";
import { FormItem } from "../ui/form";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function DarkFormItem(props: Props) {
  return (
    <FormItem
      {...props}
      className={twMerge("bg-[#161616] flex items-stretch", props.className)}
    />
  );
}
