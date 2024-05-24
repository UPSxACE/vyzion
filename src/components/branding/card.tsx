import { forwardRef } from "react";
import { IconComponent } from "../ssr-icon/icon-component";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    icon: string;
    title: string;
    paragraph: string;
    color: string;
  };
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { icon, title, paragraph, color } = props.data;

  return (
    <article
      {...props}
      ref={ref}
      className="w-full xl:w-[380px] bg-white p-9 flex flex-col gap-4 max-lg:!opacity-100 max-lg:!translate-x-0"
    >
      <span className="text-4xl" style={{ color }}>
        {icon}
      </span>
      <h1 className="text-2xl font-semibold text-[22px]">{title}</h1>
      <p className="font-light">{paragraph}</p>
    </article>
  );
});

Card.displayName = "Card";

export default Card;
