import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-[1px] text-[12px] leading-[19.2px] py-1 px-3",
  {
    variants: {
      variant: {
        primary: "border-transparent text-[#5932C4] bg-[#6f3ff514]",
        outline: "text-[#757087] border-[#757087] bg-transparent",
        default: "text-[#757087] bg-[#E2E0E7] border-transparent",
        secondary: "text-[#11BC92] border-transparent bg-[#1ecd8514]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = ({ children, variant, className }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)}>{children}</div>
  );
};

export default Badge;