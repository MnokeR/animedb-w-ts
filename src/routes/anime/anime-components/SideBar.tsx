import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import Head3 from "../../../components/Head3";
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
          src={data.Media.coverImage.extraLarge}
          alt={data.Media.title.romaji}
        />
        <Head3>English</Head3>
        <p className="">{data.Media.title?.english || "-"}</p>
        <Head3>Native</Head3>
        <p>{data.Media.title?.native || "-"}</p>
        <Head3>Type/Format</Head3>
        <p>{capitalize(data.Media.type) || "-"}</p>
        <p>{data.Media.format || "-"}</p>
        <Head3>Status</Head3>
        <p>{capitalize(data.Media.status)}</p>
        <Head3>Episodes</Head3>
        <p>{data.Media.episodes || "-"}</p>
        <Head3>Studio</Head3>
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
