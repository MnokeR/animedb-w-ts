import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import Genre from "../../../components/Genre";
import ContentCard from "../../../components/cards/ContentCard";
import HTMLReactParser from "html-react-parser/lib/index";

interface Props {
  data: AnimeDetails;
}

function MainBody({ data }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <ContentCard>
        <h1 className="text-lg font-semibold ">{data.Media.title.romaji}</h1>
        <p className="text-sm">{HTMLReactParser(data.Media.description)}</p>
        <Genre genres={data.Media.genres} />
      </ContentCard>
    </div>
  );
}

export default MainBody;
