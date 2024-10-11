import { CrossIcon } from "../../ui/icons/CrossIcon";

export const RemoveButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="absolute top-0 right-0 text-xs text-[#F78E70] cursor-pointer flex flex-row p-1"
      onClick={onClick}
    >
      <CrossIcon color="#F78E70" size={16} /> 移除
    </button>
  );
};
