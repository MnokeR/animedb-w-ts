import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import H3 from "../../../components/H3";
import ContentCard from "../../../components/cards/ContentCard";
import { capitalize } from "../../../utils/capitalize";

interface Props {
  data: AnimeDetails;
}

function SideBar({ data }: Props) {
  return (
    <ContentCard className="w-full xs:w-[230px] xs:h-full text-sm">
      <div className="flex flex-col">
        <img
          className="rounded-lg shadow shadow-gray-500 dark:shadow-gray-700"
          src={data.Media.coverImage.large}
          alt={data.Media.title.romaji}
        />
        <H3>English</H3>
        <p className="">{data.Media.title?.english || "-"}</p>
        <H3>Native</H3>
        <p>{data.Media.title?.native || "-"}</p>
        <H3>Type/Format</H3>
        <p>{capitalize(data.Media.type) || "-"}</p>
        <p>{data.Media.format || "-"}</p>
        <H3>Status</H3>
        <p>{capitalize(data.Media.status)}</p>
        <H3>Episodes</H3>
        <p>{data.Media.episodes || "-"}</p>
        <H3>Studio</H3>
        <p>
          {data.Media.studios.edges.map((main) => {
            if (main.isMain) {
              return main.node.name;
            }
          })}
        </p>
      </div>
    </ContentCard>
  );
}

export default SideBar;
