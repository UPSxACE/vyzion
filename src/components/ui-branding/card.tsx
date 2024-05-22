import { IconComponent } from "../ssr-icon/icon-component";

interface Props {
  data: {
    icon: string;
    title: string;
    paragraph: string;
  };
}

export default function Card(props: Props) {
  const { icon, title, paragraph } = props.data;
  return (
    <article className="w-full xl:w-[380px] h-[290px] bg-white p-9 flex flex-col gap-4">
      <span className="text-4xl text-[#97959a]">
        <IconComponent icon={icon} />
      </span>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="font-light">{paragraph}</p>
    </article>
  );
}
