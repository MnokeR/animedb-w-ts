import SelectOption from "./SelectOption";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { yearsFromTo } from "../../../utils/yearsFromTo";
import { useDebounce } from "../../../hooks/useDebouce";
import { useEffect, useState } from "react";

function SearchField() {
  const { setQueryParam, deleteQueryParam } = useQueryParams();
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchValue) {
      setQueryParam("term", debounceSearch);
    } else {
      deleteQueryParam("term");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  return (
    <div className="flex justify-center m-4">
      <fieldset className="border border:slate-200 dark:border-slate-800 p-2">
        <legend>Search</legend>
        <div className="flex p-1">
          <input
            name="term"
            className="flex-1 p-1 h-8 bg-slate-200 dark:bg-slate-800 rounded-l border-none  outline-none"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
              { label: "Airing", value: "RELEASING" },
              { label: "Finished", value: "FINISHED" },
              { label: "Coming Soon", value: "NOT_YET_RELEASED" },
            ]}
          />
          <SelectOption
            name="Sort"
            options={[
              { label: "Popularity", value: "POPULARITY_DESC" },
              { label: "Trending", value: "TRENDING_DESC" },
              { label: "Score", value: "SCORE_DESC" },
            ]}
          />
        </div>
      </fieldset>
    </div>
  );
}

export default SearchField;
