"use client";

import { motion, Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: 0.07 }}
        aria-hidden
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={defaultVariants}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
