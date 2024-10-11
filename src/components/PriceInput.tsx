import { useEffect, useState } from "react";
import { Input } from "../ui/Input";
import { addComma } from "../utils/utils";
type PriceInputProps = {
  onChange: (value: string) => void;
};
export const PriceInput = ({ onChange }: PriceInputProps) => {
  const [value, setValue] = useState("0");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/,/g, "");

    if (!isValidInput(val)) return;

    if (val !== "") {
      val = addComma(val);
    }
    setValue(val);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    const isDecimalTyping = val.endsWith(".");
    if (isDecimalTyping) {
      val = val.slice(0, -1);
    }

    setValue(addComma(val));
  };

  useEffect(() => {
    if (!onChange) return;
    onChange(value);
  }, [value, onChange]);

  return (
    <Input
      name=""
      type="text"
      label="入住費用(每人每晚)"
      placeholder="請輸入費用"
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
