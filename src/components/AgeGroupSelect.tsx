import { useEffect, useState } from "react";
import { Label } from "../ui/Label";
import { Select } from "../ui/Select";

type AgeGroupSelectProps = {
  min: number;
  max: number;
  label: string;
  onChange?: (value: [number, number]) => void;
};

export const AgeGroupSelect = ({
  min,
  max,
  label = "年齡",
  onChange,
}: AgeGroupSelectProps) => {
  const [value, setValue] = useState<[number, number]>([min, max]);
  const [minVal, maxVal] = value;

  const minOptions = Array.from({ length: maxVal - min + 1 }, (_, i) =>
    (min + i).toString()
  );
  const maxOptions = Array.from({ length: max - minVal + 1 }, (_, i) =>
    (minVal + i).toString()
  );

  const handleChange = (
    type: "min" | "max",
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (type === "min") {
      setValue([+e.target.value, maxVal]);
    } else {
      setValue([minVal, +e.target.value]);
    }
  };

  useEffect(() => {
    if (!onChange) return;
    onChange(value);
  }, [value]);

  return (
    <div className="w-min-[280px] h-fit flex flex-col items-start p-1">
      <Label label={label} name="ageGroupSelect" />
      <div className="rounded text-sm text-gray-500 w-full  h-10 flex justify-between ">
        <Select
          className="border-r-1 rounded-r-none"
          selectOptions={minOptions}
          value={minVal}
          onChange={(e) => handleChange("min", e)}
        />
        <div className="flex items-center justify-center text-gray-500 bg-gray-200 text-center w-1/6 h-full ">
          ~
        </div>
        <Select
          className="rounded-l-none border-l-1"
          selectOptions={maxOptions}
          value={maxVal}
          onChange={(e) => handleChange("max", e)}
        />
      </div>
    </div>
  );
};
