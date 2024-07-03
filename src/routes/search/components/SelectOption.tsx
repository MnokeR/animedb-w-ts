import { useQueryParams } from "../../../hooks/useQueryParams";

interface SelectOptionProps {
  name: string;
  options: string[] | number[];
  className?: string;
  defaultValue?: string;
}

function SelectOption({
  name,
  options,
  className,
  defaultValue,
}: SelectOptionProps) {
  const { getQueryParam, setQueryParam, deleteQueryParam } = useQueryParams();

  const renderOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") return deleteQueryParam(name);
    setQueryParam(name, e.target.value);
  };
  return (
    <select
      name={name}
      onChange={handleChange}
      defaultValue={getQueryParam(name) || defaultValue}
      className={`p-1 h-8 bg-slate-200 dark:bg-slate-800 border-none outline-none ${className}`}
    >
      <option value="">{name}</option>
      {renderOptions}
    </select>
  );
}

export default SelectOption;
