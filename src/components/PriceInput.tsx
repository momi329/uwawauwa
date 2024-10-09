import { useState } from "react";
import { addComma } from "../utils/utils";
import { Input } from "../ui/Input";

export const PriceInput = () => {
  const [value, setValue] = useState("0");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/,/g, "");

    if (!isValidInput(val)) return;
    console.log(val);

    if (val !== "") {
      val = addComma(val);
    }
    setValue(val);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    const isDemicalTyping = val.endsWith(".");
    if (isDemicalTyping) {
      val = val.slice(0, -1);
    }
    if (val === "") {
      val = "0";
    }
    setValue(addComma(val));
  };

  return (
    <>
      <Input
        name=""
        type="text"
        label="入住費用(每人每晚)"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </>
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
