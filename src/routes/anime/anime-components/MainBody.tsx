import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import Genre from "../../../components/Genre";
import ContentCard from "../../../components/cards/ContentCard";
import HTMLReactParser from "html-react-parser/lib/index";
import Characters from "./Characters";
import Related from "./Related";
interface Props {
  data: AnimeDetails;
}

function MainBody({ data }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <ContentCard>
        <h1 className="text-lg font-semibold ">{data.Media.title.romaji}</h1>
        <p id="description" className="text-sm">
          {HTMLReactParser(data.Media.description)}
        </p>
        <br></br>
        <Genre genres={data.Media.genres} />
      </ContentCard>
      <ContentCard>
        <Characters data={data} />
      </ContentCard>
      <ContentCard>
        {data.Media.relations.edges.length > 0 && <Related data={data} />}
      </ContentCard>
    </div>
  );
}

export default MainBody;
