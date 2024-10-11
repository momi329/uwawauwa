import { useState } from "react";
import { cn } from "../lib/cn";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  selectOptions: string[];
  icon?: React.ReactNode;
};

export const Select = ({
  className,
  selectOptions,
  icon = <ChevronDownIcon />,
  ...props
}: SelectProps) => {
  const [selectedAge, setSelectedAge] = useState("");

  return (
    <div className="relative size-full ">
      <select
        value={selectedAge}
        onChange={(e) => setSelectedAge(e.target.value)}
        className={cn(
          "focus:bg-zinc-100 cursor-pointer appearance-none outline-none size-full pl-2 pr-4 py-2  border border-gray-300 rounded-md customSelect text-gray-500 text-xs",
          className
        )}
        {...props}
      >
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        className="pointer-events-none absolute inset-y-0 
        right-0 flex items-center px-2 text-gray-500 "
      >
        {icon}
      </div>
    </div>
  );
};
