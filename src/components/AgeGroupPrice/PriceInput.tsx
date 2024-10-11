import { useEffect, useState } from "react";
import { Input } from "../../ui/Input";
import { addComma } from "../../utils/utils";
type PriceInputProps = {
  isError: boolean;
  onChange: (value: string) => void;
  name: string;
};

export const PriceInput = ({ isError, onChange, name }: PriceInputProps) => {
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
    // 如果輸入的是小數點，則移除小數點
    const isDecimalTyping = val.endsWith(".");
    if (isDecimalTyping) {
      val = val.slice(0, -1);
    }
    // 移除開頭的0
    val = val.replace(/^0+(?=\d)/, "");
    setValue(addComma(val));
  };

  useEffect(() => {
    if (!onChange) return;
    onChange(value);
  }, [value, onChange]);

  return (
    <Input
      name={name}
      type="text"
      label="入住費用(每人每晚)"
      placeholder="請輸入費用"
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur}
      isError={isError}
    />
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
