import { getSearchResults } from "../../../apis/queries/queries/getSearchResults";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import Loading from "../../../components/Loading";
import RankingList from "./RankingList";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useLocation } from "react-router-dom";

function RankingQuery() {
  const location = useLocation();

  let sort;
  if (location.pathname.includes("top")) sort = "SCORE_DESC";
  if (location.pathname.includes("trending")) sort = "TRENDING_DESC";
  if (location.pathname.includes("popular")) sort = "POPULARITY_DESC";

  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteData("rankings", getSearchResults, { sort });

  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  return (
    <>
      <RankingList data={data} />
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
      {isFetchingNextPage && <Loading />}
    </>
  );
}

export default RankingQuery;
