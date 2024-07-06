import { useInfiniteQuery } from "@tanstack/react-query";
import { PageInfo } from "../apis/queries/types/animeSearch";

interface SearchParams {
  [key: string]: string | number | undefined;
}

type ApiResponse<T> = {
  media: T;
  pageInfo: PageInfo;
};

export const useInfiniteData = <T>(
  qKey: string,
  getApi: (pageParam: number, params: SearchParams) => Promise<ApiResponse<T>>,
  params: SearchParams
) => {
  return useInfiniteQuery({
    queryKey: [qKey, params],
    queryFn: ({ pageParam = 1 }) => getApi(pageParam, params),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage.pageInfo;
      return pageInfo.hasNextPage ? pageInfo.currentPage + 1 : undefined;
    },
    refetchOnMount: false,
    staleTime: 60 * 1000 * 60,
  });
};
