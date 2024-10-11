import { useState } from "react";
import { InputLabel } from "../../ui/InputLabel";
import { addComma, removeComma } from "../../utils/utils";

type PriceInputProps = {
  isError: boolean;
  onChange: (value: string) => void;
  name: string;
};

export const PriceInput = ({ isError, onChange, name }: PriceInputProps) => {
  const [value, setValue] = useState("0");

  const cleanUpValue = (val: string) => {
    const isDecimalTyping = val.endsWith(".");
    if (isDecimalTyping) {
      val = val.slice(0, -1);
    }

    // 如果最後開頭是0，移除開頭的0
    val = val.replace(/^0+(?=\d)/, "");
    val = removeComma(val);

    return val;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = removeComma(e.target.value);

    if (!isValidInput(val)) return;

    val = addComma(val);

    setValue(val);

    if (onChange) onChange(val);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = addComma(cleanUpValue(e.target.value));
    setValue(updatedValue);
    if (onChange) onChange(updatedValue);
  };

  return (
    <InputLabel
      name={name}
      type="text"
      label="入住費用(每人每晚)"
      placeholder="請輸入費用"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      isError={isError}
    />
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
