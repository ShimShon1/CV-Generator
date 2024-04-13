type DescriptionAreaProps = {
  title: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

export default function DescriptionArea({
  title,
  onInputChange,
  value = "",
}: DescriptionAreaProps) {
  return (
    <div className="mb-2 grid max-w-[70%] gap-1">
      <label htmlFor={title} className="text-base  capitalize">
        {title}:
      </label>
      <textarea
        value={value}
        name={title}
        rows={3}
        className="rounded-sm border border-slate-300 bg-slate-200  p-0.5 pl-1"
        onChange={onInputChange}
      />
    </div>
  );
}
