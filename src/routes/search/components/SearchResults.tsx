import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../../apis/queries/queries/getSearchResults";
import { useQueryParams } from "../../../hooks/useQueryParams";
import SearchRender from "./SearchRender";

function SearchResults() {
  const { getQueryParam } = useQueryParams();
  const term = getQueryParam("term");
  const type = getQueryParam("Type");
  const year = getQueryParam("Year");
  const season = getQueryParam("Season");
  const format = getQueryParam("Format");
  const currentStatus = getQueryParam("Status");
  const { data, status, error } = useInfiniteQuery({
    queryKey: ["search", term, type, year, season, format, currentStatus],
    queryFn: ({ pageParam = 1 }) =>
      getSearchResults({
        pageParam,
        term,
        type,
        year,
        season,
        format,
        currentStatus,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage.pageInfo;
      return pageInfo.hasNextPage ? pageInfo.currentPage : undefined;
    },
    staleTime: 60 * 1000 * 60,
  });

  if (status === "pending") return "Loading";
  if (status === "error") return `Error: ${error.message}`;

  return (
    <div>
      {term ? <p className="text-center m-2 italic">"{term}"</p> : ""}
      <SearchRender data={data} />
    </div>
  );
}

export default SearchResults;
