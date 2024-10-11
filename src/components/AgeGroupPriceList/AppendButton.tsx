import { cn } from "../../lib/cn";

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
