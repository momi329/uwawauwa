import type React from "react";
import { cn } from "../helper/cn";

import { Label } from "./Label";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  curr?: string;
  errorMsg?: string;
  name: string;
};

export const Input = ({
  type = "text",
  curr = "TWD",
  placeholder = "",
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
    <>
      <Label label={label} name={name} />
      <div
        className="h-10 w-full rounded border border-gray-300 text-gray-500
      flex flex-row "
      >
        <div
          className=" w-16 h-full bg-gray-200 rounded-l 
        text-xs flex items-center justify-center "
        >
          {curr}
        </div>
        <input
          className={cn(
            " p-2 size-full rounded-r outline-1 placeholder:text-sm",
            errorMsg && "border-[#F78E70]"
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
