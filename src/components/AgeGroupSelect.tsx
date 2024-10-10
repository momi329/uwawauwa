import { useState } from "react";
import { Label } from "../ui/Label";
import { Select } from "../ui/Select";

type AgeGroupSelectProps = {
  min: number;
  max: number;
  label: string;
};

export const AgeGroupSelect = ({
  min,
  max,
  label = "年齡",
}: AgeGroupSelectProps) => {
  const [value, setValue] = useState({ min, max });

  const minOptions = Array.from({ length: value.max - min + 1 }, (_, i) =>
    (min + i).toString()
  );
  const maxOptions = Array.from({ length: max - value.min + 1 }, (_, i) =>
    (value.min + i).toString()
  );

  const handleChange = (
    type: "min" | "max",
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (type === "min") {
      setValue({ ...value, min: +e.target.value });
    } else {
      setValue({ ...value, max: +e.target.value });
    }
  };

  return (
    <div className="w-min-[280px] h-fit flex flex-col items-start p-1">
      <Label label={label} name="ageGroupSelect" />
      <div className="rounded text-sm text-gray-500 w-full  h-10 flex justify-between ">
        <Select
          className="border-r-1 rounded-r-none"
          selectOptions={minOptions}
          value={value.min}
          onChange={(e) => handleChange("min", e)}
        />
        <div className="flex items-center justify-center text-gray-500 bg-gray-200 text-center w-1/6 h-full ">
          ~
        </div>
        <Select
          className="rounded-l-none border-l-1"
          selectOptions={maxOptions}
          value={value.max}
          onChange={(e) => handleChange("max", e)}
        />
      </div>
    </div>
  );
};
