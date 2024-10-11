import { useEffect, useState } from "react";
import { InputLabel } from "../../ui/InputLabel";
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
    // 如果最後結尾是小數點，移除小數點
    const isDecimalTyping = val.endsWith(".");
    if (isDecimalTyping) {
      val = val.slice(0, -1);
    }
    // 如果最後開頭是0，移除開頭的0
    val = val.replace(/^0+(?=\d)/, "");
    setValue(addComma(val));
  };

  useEffect(() => {
    if (!onChange) return;
    onChange(value);
  }, [value, onChange]);

  return (
    <InputLabel
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
