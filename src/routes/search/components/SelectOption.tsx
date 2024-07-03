import { useQueryParams } from "../../../hooks/useQueryParams";

interface SelectOptionProps {
  name: string;
  options: SelectOptions[];
  className?: string;
  defaultValue?: string;
}
interface SelectOptions {
  label?: string;
  value?: string | number;
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
      <option key={option.value} value={option.value}>
        {option?.label || option.value}
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
