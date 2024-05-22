import { IconType } from "react-icons";

interface IIconComponent {
  icon: string;
  size?: number;
}
export type IReactIcon = string;

export const IconComponent: React.FC<IIconComponent> = async ({
  icon,
  size,
}) => {
  const lib = icon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLowerCase();

  // const DynamicIconComponent = loadable(() => import(`react-icons/${lib}`), {
  //   resolveComponent: (el) => el[icon],
  // }) as IconType;

  if (lib === "ai") {
    const DynamicIconComponent = (await import("react-icons/ai").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "bs") {
    const DynamicIconComponent = (await import("react-icons/bs").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "bi") {
    const DynamicIconComponent = (await import("react-icons/bi").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "fi") {
    const DynamicIconComponent = (await import("react-icons/fi").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "fa") {
    const DynamicIconComponent = (await import("react-icons/fa").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "io") {
    const DynamicIconComponent = (await import("react-icons/io").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "md") {
    const DynamicIconComponent = (await import("react-icons/md").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "rx") {
    const DynamicIconComponent = (await import("react-icons/rx").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "ri") {
    const DynamicIconComponent = (await import("react-icons/ri").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "si") {
    const DynamicIconComponent = (await import("react-icons/si").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }
  if (lib === "tb") {
    const DynamicIconComponent = (await import("react-icons/tb").then(
      (mod) => mod[icon]
    )) as IconType;

    return <DynamicIconComponent size={size} />;
  }

  return null;
};
