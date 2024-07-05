import { AnimeCharacters } from "../types/animeCharacters";
import { useAxios } from "../../../hooks/useAxios";
import { RespData } from "../types/animeDetails";

interface Media {
  Media: {
    characters: AnimeCharacters;
  };
}

export const getCharacters = async (
  page: number,
  id: string | undefined
): Promise<AnimeCharacters> => {
  const query = `
    query media($id: Int, $page: Int) {
      Media(id: $id) {
        id
        characters(page: $page, perPage: 8, sort: [ROLE, RELEVANCE, ID]) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          edges {
            id
            role
            name
            voiceActorRoles(sort: [RELEVANCE, ID]) {
              roleNotes
              dubGroup
              voiceActor {
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
      }
    }
  
  `;
  const variables = {
    page: page,
    id: id,
  };

  // const options = {
  //   method: "post",
  //   url: base_URL,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   data: {
  //     query: query,
  //     variables: variables,
  //   },
  // };

  // try {
  //   const resp = await axios(options);
  //   console.log(resp.data.data.Media.characters);
  //   return resp.data.data.Media.characters as AnimeCharacters;
  // } catch (error) {
  //   throw error;
  // }

  const resp = (await useAxios(query, variables)) as RespData<Media>;
  return resp.data.data.Media.characters;
};
