import { useState } from "react";
import { FormError } from "../ui/FromError";
import { Input } from "../ui/Input";
import { addComma } from "../utils/utils";

export const PriceInput = () => {
  const [value, setValue] = useState("0");
  const [errorMsg, setErrorMsg] = useState({ isError: false, msg: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/,/g, "");

    if (!isValidInput(val)) return;
    setErrorMsg({ isError: false, msg: "" });

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
    if (val === "") {
      setErrorMsg({ isError: true, msg: "請輸入費用" });
    }
    setValue(addComma(val));
  };

  return (
    <div className="min-w-[280px] h-fit flex flex-col items-start p-1">
      <Input
        name=""
        type="text"
        label="入住費用(每人每晚)"
        placeholder="請輸入費用"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <FormError errorMsg={errorMsg} />
      <div className="text-xs text-gray-500 ml-auto">輸入0表示免費</div>
    </div>
  );
};

const isValidInput = (val: string) => {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)?$/;
  return regex.test(val);
};
