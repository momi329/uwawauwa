type LabelProps = {
  label: string;
  name: string;
};

export const Label = ({ label, name }: LabelProps) => {
  return (
    <label htmlFor={name} className="text-xs  text-gray-500 pb-1">
      {label}
    </label>
  );
};
