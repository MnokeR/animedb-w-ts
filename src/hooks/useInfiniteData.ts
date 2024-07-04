import { useInfiniteQuery } from "@tanstack/react-query";
import { PageInfo } from "../apis/queries/types/animeSearch";
interface SearchParams {
  perPage?: number;
  id?: number;
  term?: string;
  type?: string;
  year?: string;
  season?: string;
  format?: string;
  currentStatus?: string;
  sort?: string;
}
type GetApiFunction = (pageParam: number, params: SearchParams) => Promise<any>;

export const useInfiniteData = (
  qKey: string,
  getApi: GetApiFunction,
  params: SearchParams
) => {
  return useInfiniteQuery({
    queryKey: [qKey, params],
    queryFn: ({ pageParam = 1 }) => getApi(pageParam, params),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage.pageInfo as PageInfo;
      return pageInfo.hasNextPage ? pageInfo.currentPage + 1 : undefined;
    },
    refetchOnMount: false,
    staleTime: 60 * 1000 * 60,
  });
};
