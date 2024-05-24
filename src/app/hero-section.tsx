"use client";
import { Button } from "@/components/ui/button";
import useInitialLoadDone from "@/hooks/initial-load/use-initial-load-done";
import { motion } from "framer-motion";
import Image from "next/image";
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

  const initialLoadDone = useInitialLoadDone();

  //max-w-[540px]
  return (
    <div
      className={twMerge(
        "max-w-[1200px] text-white flex flex-col justify-center",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-20">
        <div className="flex-col justify-center hidden lg:flex">
          <motion.div
            initial={
              initialLoadDone
                ? { opacity: 1, x: "0%" }
                : { opacity: 0, x: "-25%" }
            }
            transition={{
              duration: 0.3,
              delay: 0.4,
              // ease: [0.01, 0.8, 0.5, 1.01],
              ease: "easeOut",
            }}
            animate={{ opacity: 1, x: "0%" }}
            className="w-full bg-[#2b2b2b] aspect-[1.4/1] p-2 rounded-3xl"
          >
            <div className="border-[3px] border-white h-full w-full p-3 rounded-[2.25rem]">
              <div className="bg-[#2b2b2b] w-full h-full relative rounded-3xl overflow-hidden">
                <Image
                  fill
                  alt="background image"
                  className="object-cover"
                  src="/home-bg-image-cropped-v2.jpg"
                  blurDataURL="/home-bg-image-cropped-v2-blur.jpg"
                  priority
                  placeholder="blur"
                  sizes="640px"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={
            initialLoadDone ? { opacity: 1, x: "0%" } : { opacity: 0, x: "25%" }
          }
          transition={{
            duration: 0.3,
            delay: 0.7,
            // ease: [0.01, 0.8, 0.5, 1.01],
            ease: "easeOut",
          }}
          animate={{ opacity: 1, x: "0%" }}
          className={
            "flex flex-col col-span-2 lg:col-span-1 justify-center gap-4 z-10 py-10"
          }
        >
          {/* <span className="font-bold text-xl">{sub}</span> */}
          <h1 className="font-bold text-3xl md:text-5xl leading-snug">
            {title}
          </h1>
          <p>{paragraph}</p>
          <Button
            className="w-fit bg-[#141414] mt-12 py-6 px-10 hover:bg-[#606060]"
            size="lg"
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
