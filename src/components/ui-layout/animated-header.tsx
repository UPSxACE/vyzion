"use client";
import useInitialLoadDone from "@/hooks/initial-load/use-initial-load-done";
import { motion } from "framer-motion";
import Header from "./header";

const MotionHeader = motion(Header);

export default function AnimatedHeader() {
  const initialLoadDone = useInitialLoadDone();
  return (
    <MotionHeader
      initial={initialLoadDone ? { y: "0%" } : { y: "-100%" }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: [0.01, 0.8, 0.5, 1.01],
      }}
      animate={{ y: "0%" }}
    />
  );
}
