export const FormError = ({ errorMsg }: { errorMsg: string | undefined }) => {
  if (!errorMsg) return null;
  return (
    <div className="min-h-6 h-fit rounded text-xs bg-[#F8EAE7] px-2 py-1 rounded-b w-full text-orange-600">
      {errorMsg}
    </div>
  );
};
