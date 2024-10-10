import { AgeGroupSelect } from "./AgeGroupSelect";
import { PriceInput } from "./PriceInput";
type AgeGroupPriceListProps = {
  onChange: (result: any) => void;
};
export const AgeGroupPriceList = ({ onChange }: AgeGroupPriceListProps) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-1/2">
        <AgeGroupSelect min={0} max={20} label="年齡" />
      </div>
      <div className="w-1/2">
        <PriceInput />
      </div>
    </div>
  );
};
