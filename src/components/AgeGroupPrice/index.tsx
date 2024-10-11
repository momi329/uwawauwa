import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { getNumberIntervals } from "../../utils/utils";
import { AgeGroupPriceItem } from "./AgeGroupPriceItem";
import { AppendButton } from "./AppendButton";
import { RemoveButton } from "./RemoveButton";

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
        onChange={() => {
          let result = getValues("AgeGroupPriceList");
          onChange(result);
        }}
        className="flex flex-col gap-2 *:border-b *:pb-3 border-gray-100"
      >
        {fields.map((field, index) => (
          <div className="relative" key={field.id}>
            <AgeGroupPriceItem index={index} />
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
