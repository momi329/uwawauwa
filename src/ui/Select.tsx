import { useState } from "react";
import { cn } from "../helper/cn";

type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  selectOptions: string[];
  placeholder?: string;
  icon?: React.ReactNode;
};

export const Select = ({
  className,
  selectOptions,
  placeholder = "請選擇",
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
          "cursor-pointer appearance-none outline-none size-full pl-2 pr-4 py-2  border border-gray-300 rounded-md customSelect text-gray-500 text-xs",
          className
        )}
        {...props}
      >
        <option>{placeholder}</option>
        {selectOptions.map((option) => (
          <option key={option} value={option} className="">
            {option}
          </option>
        ))}
      </select>
      <div
        className="pointer-events-none absolute inset-y-0 
        right-0 flex items-center px-2 text-gray-500"
      >
        {icon}
      </div>
    </div>
  );
};

const ChevronDownIcon = () => {
  return (
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  );
};
