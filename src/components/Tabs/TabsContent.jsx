import { cn } from "../../utils/cn";
import { useTabs } from "./useTabs";

const TabsContent = ({ value, children, className }) => {
  const { active } = useTabs();

  if (value !== active) return null;

  return <div className={cn("w-full p-4", className)}>{children}</div>;
};

export default TabsContent;
