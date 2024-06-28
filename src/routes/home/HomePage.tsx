import HomeAnimeList from "./home-components/HomeAnimeList";
import ContentWrapper from "../../components/ContentWrapper";

export interface Categories {
  name: "nextSeason" | "popular" | "season" | "top" | "trending";
  title: string[];
}

function HomePage() {
  const categories: Categories[] = [
    { name: "trending", title: ["TRENDING", "NOW"] },
    { name: "season", title: ["SEASONS", "TOP"] },
    { name: "nextSeason", title: ["NEXT", "SEASON"] },
    { name: "top", title: ["TOP", "RATED"] },
  ];
  return (
    <ContentWrapper>
      <HomeAnimeList categories={categories} />
    </ContentWrapper>
  );
}

export default HomePage;
