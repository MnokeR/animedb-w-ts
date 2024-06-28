import HomeAnimeList from "./home-components/HomeAnimeList";
import ContentWrapper from "../../components/ContentWrapper";

export interface Categories {
  name: "nextSeason" | "popular" | "season" | "top" | "trending";
  title: string[];
}

function HomePage() {
  const categories: Categories[] = [
    { name: "trending", title: ["Trending", "Now"] },
    { name: "season", title: ["Season", "Top"] },
    { name: "nextSeason", title: ["Next", "Season"] },
    { name: "top", title: ["Top", "Rated"] },
  ];
  return (
    <ContentWrapper>
      <HomeAnimeList categories={categories} />
    </ContentWrapper>
  );
}

export default HomePage;
