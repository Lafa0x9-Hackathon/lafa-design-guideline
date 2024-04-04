import { cn } from "./../../utils/cn";
import { useTabs } from "./useTabs";

const TabsTrigger = ({ children, value }) => {
  const { active, setActive } = useTabs();
  return (
    <div className="flex flex-col gap-[1px] ">
      <button type="button" onClick={() => setActive(value)}>
        <h4
          className={cn(
            "font-semibold sm:text-[20px] text-[14px] leading-normal transition-all duration-200",
            value === active && "text-violet-400"
          )}
        >
          {children}
        </h4>
      </button>
      <div
        className={cn(
          "sm:h-[6px] h-2 w-full bg-transparent sm:-mb-[1.5px] -mb-[1px] transition-all duration-200",
          value === active && "bg-violet-400"
        )}
      />
    </div>
  );
};

export default TabsTrigger;
