import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible ? (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={
              "absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 rounded-[4px] bg-[#0E0333]"
            }
          >
            <div className="absolute top-[0.5px] left-1/2 -translate-x-1/2 -translate-y-full triangle" />
            <p className="text-[12px] font-Libre-Franklin leading-[16px] text-[#fff] px-3 py-[10px] whitespace-nowrap">
              {content}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
