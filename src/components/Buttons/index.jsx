import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 border-[1px] font-Libre-Franklin border-transparent py-[9px] px-[26px] whitespace-nowrap rounded-[4px] text-[14px] font-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6f3ff580] disabled:opacity-40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        neutral: "bg-gray-300 text-gray-white hover:bg-gray-400",
        "neutral-outline": "border-gray-300 text-gray-300 hover:text-gray-400 hover:border-gray-400",
        "neutral-ghost": "text-gray-300 hover:text-gray-400",

        primary: "bg-violet-400 text-gray-white hover:bg-violet-500",
        "primary-outline": "border-violet-400 text-violet-400 hover:text-violet-500 hover:border-violet-500",
        "primary-ghost": "text-violet-400 hover:text-violet-500",

        success: "bg-teal-400 text-gray-white hover:bg-teal-500",
        "success-outline": "border-teal-400 text-teal-400 hover:text-teal-500 hover:border-teal-500",
        "success-ghost": "text-teal-400 hover:text-teal-500",

        danger: "bg-pink-400 text-gray-white hover:bg-pink-500",
        "danger-outline": "border-pink-400 text-pink-400 hover:text-pink-500 hover:border-pink-500",
        "danger-ghost": "text-pink-400 hover:text-pink-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ className, children, variant, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
