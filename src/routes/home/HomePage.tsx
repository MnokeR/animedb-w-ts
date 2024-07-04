import HomeAnimeList from "./home-components/HomeAnimeList";
import ContentWrapper from "../../components/ContentWrapper";

export interface Categories {
  name: "nextSeason" | "popular" | "season" | "top" | "trending";
  title: string[];
  path?: string;
}

function HomePage() {
  const categories: Categories[] = [
    { name: "trending", title: ["TRENDING", "NOW"], path: "rankings/trending" },
    { name: "season", title: ["SEASONS", "TOP"] },
    { name: "nextSeason", title: ["NEXT", "SEASON"] },
    { name: "popular", title: ["MOST", "POPULAR"], path: "rankings/popular" },
    { name: "top", title: ["TOP", "RATED"], path: "rankings/top" },
  ];
  return (
    <ContentWrapper>
      <HomeAnimeList categories={categories} />
    </ContentWrapper>
  );
}

export default HomePage;
