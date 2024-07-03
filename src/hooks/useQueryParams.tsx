import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (paramName: string, defaultValue?: string) => {
    return searchParams.get(paramName) || defaultValue;
  };
  const setQueryParam = (paramName: string, paramValue: string) => {
    setSearchParams((prevParam) => {
      prevParam.set(paramName, paramValue);
      return prevParam;
    });
  };
  const deleteQueryParam = (paramName: string) => {
    searchParams.delete(paramName);
    setSearchParams(searchParams);
  };
  return { getQueryParam, setQueryParam, deleteQueryParam };
};
