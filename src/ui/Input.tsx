import type React from "react";
import type { errorMsgType } from "../components/PriceInput";
import { cn } from "../helper/cn";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  curr?: string;
  errorMsg?: string;
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
      <label htmlFor={name} className="text-xs h-1/4 text-gray-500 pb-1">
        {label}
      </label>
      <div
        className="h-12 w-full rounded border border-gray-300 text-gray-500
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
            "  p-2 size-full rounded-r outline-1 placeholder:text-sm",
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

export const InputError = ({ errorMsg }: { errorMsg: errorMsgType }) => {
  if (!errorMsg.isError) return null;
  return (
    <div className="min-h-6 h-fit rounded text-xs bg-[#F8EAE7] px-2 py-1 rounded-b w-full text-orange-600">
      {errorMsg.msg}
    </div>
  );
};
