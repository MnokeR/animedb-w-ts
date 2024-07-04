import { useQuery } from "@tanstack/react-query";
import { getAnimes } from "../../../apis/queries/queries/getAnimes";
import { Categories } from "../HomePage";
import DisplayStyle from "../../../components/cards/DisplayStyle";
import Heading from "../../../components/Heading";
import { Fragment } from "react/jsx-runtime";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

function HomeAnimeList({ categories }: { categories: Categories[] }) {
  const { data, status, error } = useQuery({
    queryKey: ["anime"],
    queryFn: () => getAnimes(),
    staleTime: 60 * 1000 * 60,
    refetchOnMount: false,
  });

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  const renderCategories = categories.map((category) => {
    const animes = data?.[category.name]?.media.map((anime) => {
      return (
        <DisplayStyle
          key={anime.id}
          style="rows"
          id={anime.id}
          title={anime.title.userPreferred}
          image={anime.coverImage.large}
        />
      );
    });
    return (
      <Fragment key={category.name}>
        <div className="relative flex justify-center w-full">
          <Heading heading={category.title} />
          <div className="absolute right-16 top-2">
            {category.path && <Link to={category.path}>View All</Link>}
          </div>
        </div>
        {animes}
      </Fragment>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {renderCategories}
    </div>
  );
}

export default HomeAnimeList;
