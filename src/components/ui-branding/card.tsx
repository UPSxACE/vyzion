import { IconComponent } from "../ssr-icon/icon-component";

interface Props {
  data: {
    icon: string;
    title: string;
    paragraph: string;
    color: string;
  };
}

export default function Card(props: Props) {
  const { icon, title, paragraph, color } = props.data;
  return (
    <article className="w-full xl:w-[380px] bg-white p-9 flex flex-col gap-4">
      <span className="text-4xl" style={{ color }}>
        <IconComponent icon={icon} />
      </span>
      <h1 className="text-2xl font-semibold text-[22px]">{title}</h1>
      <p className="font-light">{paragraph}</p>
    </article>
  );
}
