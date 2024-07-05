import { AnimeSearch } from "../types/animeSearch";
import { useAxios } from "../../../hooks/useAxios";
import { RespData } from "../types/animeDetails";

interface Page {
  Page: AnimeSearch;
}

interface SearchParams {
  term?: string;
  type?: string;
  year?: string;
  season?: string;
  format?: string;
  currentStatus?: string;
  sort?: string | string[];
}

export const getSearchResults = async (
  pageParam: number,
  {
    term,
    type,
    year,
    season,
    format,
    currentStatus,
    sort = ["TRENDING_DESC", "POPULARITY_DESC"],
  }: SearchParams
): Promise<AnimeSearch> => {
  const query = `
    query ($page: Int = 1, $id: Int, $type: MediaType, $isAdult: Boolean = false, $search: String, $format: [MediaFormat], $status: MediaStatus, $countryOfOrigin: CountryCode, $source: MediaSource, $season: MediaSeason, $seasonYear: Int, $year: String, $onList: Boolean, $yearLesser: FuzzyDateInt, $yearGreater: FuzzyDateInt, $episodeLesser: Int, $episodeGreater: Int, $durationLesser: Int, $durationGreater: Int, $chapterLesser: Int, $chapterGreater: Int, $volumeLesser: Int, $volumeGreater: Int, $licensedBy: [Int], $isLicensed: Boolean, $genres: [String], $excludedGenres: [String], $tags: [String], $excludedTags: [String], $minimumTagRank: Int, $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]) {
      Page(page: $page, perPage: 24) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(id: $id, type: $type, season: $season, format_in: $format, status: $status, countryOfOrigin: $countryOfOrigin, source: $source, search: $search, onList: $onList, seasonYear: $seasonYear, startDate_like: $year, startDate_lesser: $yearLesser, startDate_greater: $yearGreater, episodes_lesser: $episodeLesser, episodes_greater: $episodeGreater, duration_lesser: $durationLesser, duration_greater: $durationGreater, chapters_lesser: $chapterLesser, chapters_greater: $chapterGreater, volumes_lesser: $volumeLesser, volumes_greater: $volumeGreater, licensedById_in: $licensedBy, isLicensed: $isLicensed, genre_in: $genres, genre_not_in: $excludedGenres, tag_in: $tags, tag_not_in: $excludedTags, minimumTagRank: $minimumTagRank, sort: $sort, isAdult: $isAdult) {
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
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
          }
          mediaListEntry {
            id
            status
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
      }
    }
  `;
  const variables = {
    page: pageParam,
    search: term,
    type: !type ? "ANIME" : type,
    sort: term ? "SEARCH_MATCH" : sort,
    seasonYear: year,
    season: season,
    format,
    status: currentStatus,
  };

  const resp = (await useAxios(query, variables)) as RespData<Page>;
  return resp.data.data.Page;
};
