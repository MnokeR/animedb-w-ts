import HomeAnimeList from "./home-components/HomeAnimeList";
import ContentWrapper from "../../components/ContentWrapper";
import { seasonOfYear } from "../../utils/seasonOfYear";

export interface Categories {
  name: "nextSeason" | "popular" | "season" | "top" | "trending";
  title: string[];
  path?: string;
}

function HomePage() {
  const { currentSeason, nextSeason, currentYear, nextYear } = seasonOfYear();

  const categories: Categories[] = [
    { name: "trending", title: ["TRENDING", "NOW"], path: "rankings/trending" },
    {
      name: "season",
      title: ["SEASONS", "TOP"],
      path: `search?Season=${currentSeason.toUpperCase()}&Year=${currentYear}`,
    },
    {
      name: "nextSeason",
      title: ["NEXT", "SEASON"],
      path: `search?Season=${nextSeason.toUpperCase()}&Year=${nextYear}`,
    },
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
