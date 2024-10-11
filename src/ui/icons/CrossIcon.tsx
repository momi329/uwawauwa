export const CrossIcon = ({ size = 16, color = "#000000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M6 6L18 18" stroke={color} strokeLinecap="round" />
      <path d="M18 6L6.00001 18" stroke={color} strokeLinecap="round" />
    </svg>
  );
};
