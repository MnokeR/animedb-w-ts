import { SearchPages } from "../../../apis/queries/types/animeSearch";
import DisplayStyle from "../../../components/cards/DisplayStyle";

interface RankingListProps {
  data: SearchPages;
}
function RankingList({ data }: RankingListProps) {
  const renderList = data.pages.map((page) => {
    return page.media.map((anime) => {
      return (
        <DisplayStyle
          style="rows"
          id={anime.id}
          title={anime.title.userPreferred}
          image={anime.coverImage.large}
        />
      );
    });
  });
  return (
    <div className="flex flex-wrap justify-center gap-3">{renderList}</div>
  );
}

export default RankingList;
