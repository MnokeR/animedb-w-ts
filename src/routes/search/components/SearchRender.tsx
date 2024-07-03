import { SearchPages } from "../../../apis/queries/types/animeSearch";
import DisplayStyle from "../../../components/cards/DisplayStyle";
interface SearchRenderProps {
  data: SearchPages;
}
function SearchRender({ data }: SearchRenderProps) {
  const renderAnimes = data.pages.map((page) => {
    return page.media.map((anime) => {
      return (
        <DisplayStyle
          key={anime.id}
          style="rows"
          id={anime.id}
          image={anime.coverImage.large}
          title={anime.title.userPreferred}
        />
      );
    });
  });
  return (
    <div className="flex flex-wrap justify-center gap-3">{renderAnimes}</div>
  );
}

export default SearchRender;
