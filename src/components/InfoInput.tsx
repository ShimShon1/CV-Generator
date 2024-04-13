type InfoInputProps = {
  title: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function InfoInput({
  title,
  onInputChange,
  value = "",
}: InfoInputProps) {
  return (
    <div className="mb-2 grid max-w-[70%] gap-1">
      <label htmlFor={title} className="text-base  capitalize">
        {title}:
      </label>
      <input
        value={value}
        type="text"
        name={title}
        className="rounded-sm border border-slate-300 bg-slate-200  p-0.5 pl-1"
        onChange={onInputChange}
      />
    </div>
  );
}
