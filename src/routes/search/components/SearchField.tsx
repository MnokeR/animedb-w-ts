import SelectOption from "./SelectOption";
import { useQueryParams } from "../../../hooks/useQueryParams";

function SearchField() {
  const { setQueryParam, deleteQueryParam } = useQueryParams();

  let inputValue = "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    inputValue = value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return deleteQueryParam("term");
    setQueryParam("term", inputValue);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <fieldset className="border border:slate-200 dark:border-slate-800 p-2">
          <legend>Search</legend>
          <div className="flex p-1">
            <input
              name="term"
              className="flex-1 p-1 h-8 bg-slate-200 dark:bg-slate-800 rounded-l border-none  outline-none"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <SelectOption name="Type" options={["Anime", "Manga"]} />
          </div>
          <div className="flex p-1">
            <SelectOption name="Year" options={[2024, 2023, 2022]} />
            <SelectOption
              name="Season"
              options={["Winter", "Spring", "Summer", "Fall"]}
            />
            <SelectOption name="Format" options={["TV", "Movie", "OVA"]} />
            <SelectOption
              name="Status"
              options={["Ongoing", "Complete", "Not Released", "Canceled"]}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchField;
