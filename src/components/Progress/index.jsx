import { cn } from "./../../utils/cn";

const Progress = ({ value, className }) => {
  return (
    <div className={cn(`flex items-center gap-2`, className)}>
      <div className="w-[200px] h-[16px] bg-[#E5E5E5] rounded-[4px] overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-[#6F3FF5] transition-all duration-400 ease-in-out w-0"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
      <small className="font-semibold font-Libre-Franklin text-[12px] text-[#6F3FF5] leading-normal">
        {`${value}%`}
      </small>
    </div>
  );
};

export default Progress;