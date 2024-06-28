import { useQuery } from "@tanstack/react-query";
import { getHomeAnime } from "../../../apis/queries/queries/getHomeAnime";
import { Categories } from "../HomePage";
import DisplayStyle from "../../../components/cards/DisplayStyle";
import Heading from "../../../components/Heading";

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
      return (
        <DisplayStyle
          style="rows"
          id={anime.id}
          title={anime.title.userPreferred}
          image={anime.coverImage.large}
        />
      );
    });
    return (
      <>
        <Heading heading={category.title} />
        {animes}
      </>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {renderCategories}
    </div>
  );
}

export default HomeAnimeList;
