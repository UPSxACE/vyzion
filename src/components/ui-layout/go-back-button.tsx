"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
export default function JumpBackButton() {
  const goTop = () => window.scrollTo({ top: 0, left: 0 });

  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 0);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={goTop}
          className={
            "fixed bottom-6 right-6 group flex justify-center items-center h-12 w-12 bg-neutral-500 hover:bg-neutral-600 text-white rounded-sm duration-200 transition-all"
          }
        >
          <FaChevronUp className="transition-all [transition-duration:400ms] absolute text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
