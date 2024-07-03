import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../../apis/queries/queries/getSearchResults";
import { useQueryParams } from "../../../hooks/useQueryParams";
import SearchRender from "./SearchRender";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import Loading from "../../../components/Loading";

function SearchResults() {
  const { getQueryParam } = useQueryParams();

  const term = getQueryParam("term");
  const type = getQueryParam("Type");
  const year = getQueryParam("Year");
  const season = getQueryParam("Season");
  const format = getQueryParam("Format");
  const currentStatus = getQueryParam("Status");

  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
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
      return pageInfo.hasNextPage ? pageInfo.currentPage + 1 : undefined;
    },
    staleTime: 60 * 1000 * 60,
  });

  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;
  console.log(data);

  return (
    <div>
      {term ? <p className="text-center m-2 italic">"{term}"</p> : ""}
      <SearchRender data={data} />
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
      {isFetchingNextPage && <Loading />}
    </div>
  );
}

export default SearchResults;
