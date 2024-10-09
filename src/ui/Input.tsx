import type React from "react";
import { useState } from "react";
import { addComma } from "../utils/utils";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export const Input = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  onKeyDown,
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export const PriceInput = () => {
  const [value, setValue] = useState("0");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/,/g, "");

    if (!isValidInput(val)) return;
    console.log(val);
    const isDemicalTyping = val.split("").indexOf(".") === val.split("").length;

    if (val !== "" || !isDemicalTyping) {
      console.log(12345678, isDemicalTyping);
      val = addComma(+val);
    }
    setValue(val);
  };

  return (
    <>
      <Input
        name=""
        type="text"
        label="入住費用(每人每晚)"
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
