import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  /** ms each word stays on screen */
  interval?: number;
  className?: string;
}

/** Cycles through `words`, animating each in letter-by-letter. */
export default function RotatingText({
  words,
  interval = 2200,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, words.length]);

  const word = words[index];

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="inline-flex"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ staggerChildren: 0.025 }}
        >
          {word.split("").map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: "-110%", opacity: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
