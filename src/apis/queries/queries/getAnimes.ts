import axios from "axios";
import { seasonOfYear } from "../../../utils/seasonOfYear";

interface Anime {
  id: number;
  title: { userPreferred: string };
  coverImage: { large: string; extraLarge: string };
}

interface AnimeCategory {
  media: Anime[];
}

interface AnimeData {
  nextSeason: AnimeCategory;
  popular: AnimeCategory;
  season: AnimeCategory;
  top: AnimeCategory;
  trending: AnimeCategory;
}

export const getAnimes = async (): Promise<AnimeData> => {
  const { currentSeason, nextSeason, currentYear, nextYear } = seasonOfYear();

  const base_URL = "https://graphql.anilist.co";
  const query = `
    query ($season: MediaSeason, $seasonYear: Int, 
    $nextSeason: MediaSeason, $nextYear: Int) {
      trending: Page(page: 1, perPage: 6) {
        media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
          ...media
        }
      }
      season: Page(page: 1, perPage: 6) {
        media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
          ...media
        }
      }
      nextSeason: Page(page: 1, perPage: 6) {
        media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
          ...media
        }
      }
      popular: Page(page: 1, perPage: 6) {
        media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
          ...media
        }
      }
      top: Page(page: 1, perPage: 12) {
        media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
          ...media
        }
      }
    }

    fragment media on Media {
      id
      title {
        userPreferred
      }
      coverImage {
        extraLarge
        large
        color
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      bannerImage
      season
      seasonYear
      description
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      isAdult
      averageScore
      popularity
      mediaListEntry {
        id
        status
      }
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      studios(isMain: true) {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
    }
  `;
  const variables = {
    season: currentSeason.toUpperCase(),
    seasonYear: currentYear,
    nextSeason: nextSeason.toUpperCase(),
    nextYear: nextYear,
  };
  const options = {
    method: "post",
    url: base_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      query: query,
      variables: variables,
    },
  };

  try {
    const resp = await axios(options);
    return resp.data.data as AnimeData;
  } catch (error) {
    throw error;
  }
};
