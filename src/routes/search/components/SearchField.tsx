import SelectOption from "./SelectOption";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { yearsFromTo } from "../../../utils/yearsFromTo";

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
    <div className="flex justify-center m-4">
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
            <SelectOption
              name="Type"
              options={[
                { label: "Anime", value: "ANIME" },
                { label: "Manga", value: "MANGA" },
              ]}
            />
          </div>
          <div className="flex p-1">
            <SelectOption name="Year" options={yearsFromTo(1940)} />
            <SelectOption
              name="Season"
              options={[
                { label: "Winter", value: "WINTER" },
                { label: "Spring", value: "SPRING" },
                { label: "Summer", value: "SUMMER" },
                { label: "Fall", value: "FALL" },
              ]}
            />
            <SelectOption
              name="Format"
              options={[
                { label: "TV", value: "TV" },
                { label: "Movie", value: "MOVIE" },
                { label: "OVA", value: "OVA" },
              ]}
            />
            <SelectOption
              name="Status"
              options={[
                { label: "Releasing", value: "RELEASING" },
                { label: "Finished", value: "FINSIHED" },
                { label: "Coming Soon", value: "NOT_YET_RELEASED" },
              ]}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchField;
