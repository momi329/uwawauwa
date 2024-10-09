import type React from "react";
import { cn } from "../helper/cn";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  curr?: string;
  errorMsg?: string;
};

export const Input = ({
  type = "text",
  curr = "TWD",
  name,
  label,
  value,
  className,
  onChange,
  onKeyDown,
  errorMsg = "錯了",
  ...props
}: InputProps) => {
  return (
    <div
      className={cn(
        "w-[250px] bg-pink-200 h-19 flex flex-col items-start ",
        className
      )}
    >
      <label htmlFor={name} className="text-xs h-1/4 ">
        {label}
      </label>
      <div
        className="h-3/4 w-full rounded border border-gray-500 text-gray-600 
      flex flex-row flex-grow"
      >
        <div
          className=" w-10 min-h-full bg-gray-300 rounded-l 
        text-xs flex items-center justify-center "
        >
          {curr}
        </div>
        <input
          className={cn(
            "flex-grow  p-2 size-full rounded-r outline-1 ",
            errorMsg && "border-orange-300"
          )}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      <div className="text-xs bg-orange-100 p-1 rounded-b w-full text-orange-600">
        {errorMsg}
      </div>
    </div>
  );
};
