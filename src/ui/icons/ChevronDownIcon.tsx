type ChevronDownIconProps = {
  height?: number;
  width?: number;
  color?: string;
};

export const ChevronDownIcon = ({
  height = 16,
  width = 16,
  color = "currentColor",
}: ChevronDownIconProps) => {
  return (
    <svg
      className="fill-current h-4 w-4"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
      fill={color}
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  );
};
