import { useQuery } from "@tanstack/react-query";
import { getHomeAnime } from "../../../apis/queries/queries/getHomeAnime";
import { Categories } from "../HomePage";

function HomeAnimeList({ categories }: { categories: Categories[] }) {
  const { data, status, error } = useQuery({
    queryKey: ["anime"],
    queryFn: async () => await getHomeAnime(),
    staleTime: 60 * 1000 * 60,
  });

  if (status === "pending") return "Loading..";
  if (status === "error") return `Error: ${error.message}`;

  const renderCategories = categories.map((category) => {
    const animes = data?.[category.name]?.media.map((anime) => {
      return anime.title.userPreferred;
    });
    return category.title, animes;
  });

  return <div className="flex">{renderCategories}</div>;
}

export default HomeAnimeList;
