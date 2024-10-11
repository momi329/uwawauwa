import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import { FormError } from "../ui/FromError";
import { getNumberIntervals } from "../utils/utils";
import { ResultType } from "./AgeGroupPriceList";
import { AgeGroupSelect } from "./AgeGroupSelect";
import { PriceInput } from "./PriceInput";

export const AgeGroupPriceItem = ({ index }: { index: number }) => {
  const {
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();

  const fieldErrors = (
    errors as FieldErrors<{ AgeGroupPriceList: ResultType[] }>
  )?.AgeGroupPriceList?.[index as number];

  const validateOverlap = (value: [number, number]) => {
    const { overlap } = getNumberIntervals(
      getValues("AgeGroupPriceList").map((item: ResultType) => item.ageGroup),
      { max: 20, min: 0 }
    );

    const isOverlap = (minValue: number, maxValue: number) => {
      if (overlap.length === 0) return false;
      let result = false;
      overlap.forEach(([min, max]) => {
        if (minValue < min && maxValue < min) return;
        if (minValue > max && maxValue > max) return;
        result = true;
      });
      return result;
    };

    return !isOverlap(value[0], value[1]) || "年齡區間重疊";
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-1">
        <div className="text-sm text-gray-600">價格設定 - {index + 1}</div>
      </div>
      {/* 表單 */}
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <Controller
            control={control}
            name={`AgeGroupPriceList.${index}.ageGroup`}
            rules={{
              validate: (value) => validateOverlap(value),
            }}
            render={({ field: { onChange } }) => (
              <>
                <AgeGroupSelect
                  min={0}
                  max={20}
                  label="年齡"
                  onChange={(value) => {
                    onChange(value);
                    trigger("AgeGroupPriceList");
                  }}
                />
                <FormError
                  errorMsg={fieldErrors?.ageGroup?.message?.toString()}
                />
              </>
            )}
          />
        </div>
        <div className="w-1/2">
          <Controller
            control={control}
            name={`AgeGroupPriceList.${index}.price`}
            rules={{
              required: { value: true, message: "價格不能為空" },
              validate: (value) => value === "" && "價格不能為空",
            }}
            render={({ field: { onChange } }) => {
              return (
                <>
                  <PriceInput onChange={onChange} />
                  <FormError
                    errorMsg={fieldErrors?.price?.message?.toString()}
                  />
                  <div className="mt-1 text-xs text-gray-400 ml-auto text-right">
                    輸入0表示免費
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};
