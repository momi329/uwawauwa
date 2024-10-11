import type React from "react";
import { cn } from "../lib/cn";

import { Label } from "./Label";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  curr?: string;
  isError?: boolean;
  name: string;
};

export const InputLabel = ({
  type = "text",
  curr = "TWD",
  placeholder = "",
  name,
  label,
  value,
  className,
  onChange,
  onKeyDown,
  isError,
  ...props
}: InputProps) => {
  return (
    <>
      <Label label={label} name={name} />
      <div
        className="h-10 w-full rounded  text-gray-500
      flex flex-row "
      >
        <div
          className=" w-16 h-full bg-gray-200 rounded-l border border-gray-300 border-r-0
        text-xs flex items-center justify-center "
        >
          {curr}
        </div>
        <input
          className={cn(
            " p-2 size-full rounded-r outline-1 placeholder:text-sm border border-gray-300 focus:bg-zinc-100",
            { " border-[#F78E70]": isError }
          )}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
};
