"use client";

import Card, { CardProps } from "@/components/branding/card";
import { CustomDomComponent, motion } from "framer-motion";

interface Props {
  data: Record<string, any>;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

// const item = {
//   hidden: { opacity: 0, y: "-20%" },
//   show: {
//     opacity: 1,
//     y: "0%",
//     transition: {
//       ease: "easeOut",
//       duration: 0.2,
//     },
//   },
// };
const item = {
  hidden: { opacity: 0, x: "-20%" },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

const MotionCard: CustomDomComponent<CardProps> = motion(Card);

export default function FeatureCards(props: Props) {
  const { data } = props;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.4, once: true }}
      className="grid grid-cols-1 grid-rows-6 xl:grid-cols-3 sm:grid-rows-2 gap-5 py-[2.25rem]"
    >
      <MotionCard variants={item} data={data.card1} />
      <MotionCard variants={item} data={data.card2} />
      <MotionCard variants={item} data={data.card3} />
      <MotionCard variants={item} data={data.card4} />
      <MotionCard variants={item} data={data.card5} />
      <MotionCard variants={item} data={data.card6} />
    </motion.div>
  );
}
