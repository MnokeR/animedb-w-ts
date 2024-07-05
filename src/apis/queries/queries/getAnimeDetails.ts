import { RespData, AnimeDetails } from "../types/animeDetails";
import { useAxios } from "../../../hooks/useAxios";

export const getAnimeDetails = async (
  id: number,
  type: string
): Promise<AnimeDetails> => {
  const query = `query media($id: Int, $type: MediaType, $isAdult: Boolean) {
      Media(id: $id, type: $type, isAdult: $isAdult) {
        id
        title {
          userPreferred
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
        }
        bannerImage
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
        description
        season
        seasonYear
        type
        format
        status(version: 2)
        episodes
        duration
        chapters
        volumes
        genres
        synonyms
        source(version: 3)
        isAdult
        isLocked
        meanScore
        averageScore
        popularity
        hashtag
        countryOfOrigin
        isLicensed
        relations {
          edges {
            id
            relationType(version: 2)
            node {
              id
              title {
                userPreferred
              }
              format
              type
              status(version: 2)
              bannerImage
              coverImage {
                large
              }
            }
          }
        }
        characterPreview: characters(page: 1, perPage: 8, sort: [ROLE, RELEVANCE, ID]) {
          edges {
            id
            role
            name
            voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
              id
              name {
                userPreferred
              }
              language: languageV2
              image {
                large
              }
            }
            node {
              id
              name {
                userPreferred
              }
              image {
                large
              }
            }
          }
        }
        staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
          edges {
            id
            role
            node {
              id
              name {
                userPreferred
              }
              language: languageV2
              image {
                large
              }
            }
          }
        }
        studios {
          edges {
            isMain
            node {
              id
              name
            }
          }
        }
        reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
          pageInfo {
            total
          }
          nodes {
            id
            summary
            rating
            ratingAmount
            user {
              id
              name
              avatar {
                large
              }
            }
          }
        }
        externalLinks {
          id
          site
          url
          type
          language
          color
          icon
          notes
          isDisabled
        }
        streamingEpisodes {
          site
          title
          thumbnail
          url
        }
        trailer {
          id
          site
        }
        rankings {
          id
          rank
          type
          format
          year
          season
          allTime
          context
        }
        tags {
          id
          name
          description
          rank
          isMediaSpoiler
          isGeneralSpoiler
          userId
        }
      }
    }
  `;

  const variables = {
    id: id,
    type: type.toUpperCase(),
    isAdult: false,
  };

  const resp = (await useAxios(query, variables)) as RespData<AnimeDetails>;
  return resp.data.data;
};
