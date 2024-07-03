import { useInfiniteQuery } from "@tanstack/react-query";
import { PageInfo } from "../apis/queries/types/animeSearch";
interface SearchParams {
  id?: number;
  term?: string;
  type?: string;
  year?: string;
  season?: string;
  format?: string;
  currentStatus?: string;
}

export const useInfiniteData = (qKey: string, getApi, props: SearchParams) => {
  console.log(getApi);
  return useInfiniteQuery({
    queryKey: [qKey, props],
    queryFn: ({ pageParam = 1 }) => getApi(pageParam, props),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage.pageInfo as PageInfo;
      return pageInfo.hasNextPage ? pageInfo.currentPage + 1 : undefined;
    },
    refetchOnMount: false,
    staleTime: 60 * 1000 * 60,
  });
};
