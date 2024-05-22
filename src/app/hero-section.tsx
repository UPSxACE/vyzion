import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

// const text = {
//   sub: "Fastest And Most Lightweight WP Theme",
//   title: "Create Amazing Business Websites",
//   paragraph: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et
//     justo. Praesent mattis commodo augue. Morbi fringilla congue libero, ac
//     malesuada vulputate pharetra.`,
//   buttonText: "GET STARTED",
// };

interface Props {
  className: string;
    title: string;
    paragraph: string;
    buttonText: string;
}


export default function HeroSection(props: Props) {
  const { className } = props;
  const { title, paragraph, buttonText } = props;

  return (
    <div
      className={twMerge(
        "max-w-[1200px] flex text-white justify-end relative",
        className
      )}
    >
      <img
        className="absolute top-[-86px] left-0 z-0 object-cover w-full h-[calc(100%+86px)]"
        src="/home-background.jpg"
      />
      <div className={"flex flex-col max-w-[540px] justify-center gap-4 z-10"}>
        {/* <span className="font-bold text-xl">{sub}</span> */}
        <h1 className="font-bold text-5xl leading-snug">{title}</h1>
        <p>{paragraph}</p>
        <Button
          className="w-fit bg-[#141414] mt-12 py-6 px-10 hover:bg-[#606060]"
          size="lg"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
