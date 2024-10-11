import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { cn } from "../helper/cn";
import { CrossIcon } from "../ui/icons/CrossIcon";
import { getNumberIntervals } from "../utils/utils";
import { AgeGroupPriceItem } from "./AgeGroupPriceItem";

type AgeGroupPriceListProps = {
  onChange: (result: any) => void;
};

export type ResultType = {
  ageGroup: [number, number];
  price: string;
};

export const AgeGroupPriceList = ({ onChange }: AgeGroupPriceListProps) => {
  const methods = useForm<{ AgeGroupPriceList: ResultType[] }>({
    defaultValues: { AgeGroupPriceList: [{ ageGroup: [0, 20], price: "0" }] },
    mode: "onChange",
  });

  const { control, getValues } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "AgeGroupPriceList",
    control,
  });

  const { notInclude } = getNumberIntervals(
    getValues("AgeGroupPriceList").map((item) => item.ageGroup),
    { max: 20, min: 0 }
  );

  const isDisabled = notInclude.length === 0;

  return (
    <FormProvider {...methods}>
      <form
        onChange={() => onChange(getValues("AgeGroupPriceList"))}
        className="flex flex-col gap-2 *:border-b *:pb-3 border-gray-100"
      >
        {fields.map((field, index) => (
          <div className="relative">
            <AgeGroupPriceItem key={field.id} index={index} />
            {index > 0 && <RemoveButton onClick={() => remove(index)} />}
          </div>
        ))}
      </form>
      <AppendButton
        onClick={() => append({ ageGroup: [0, 20], price: "0" })}
        disabled={isDisabled}
      />
    </FormProvider>
  );
};

export const AppendButton = ({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      className={cn(
        "mr-auto text-sm text-teal-500 cursor-pointer active:text-teal-600",
        { "text-gray-400 cursor-not-allowed": disabled }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="text-xl ">+</span> 新增價格設定
    </button>
  );
};

export const RemoveButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="absolute top-1 right-0 text-xs text-[#F78E70] cursor-pointer flex flex-row p-1"
      onClick={onClick}
    >
      <CrossIcon color="#F78E70" size={16} /> 移除
    </button>
  );
};
