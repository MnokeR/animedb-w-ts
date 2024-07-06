import { PageInfo } from "./animeSearch";

export interface AnimeCharacters {
  edges: AnimeCharacter[];
  pageInfo: PageInfo;
}

interface AnimeCharacter {
  id: number;
  node: {
    id: number;
    image: {
      large: string;
    };
    name: {
      userPreferred: string;
    };
  };
  role: string;
  voiceActors: VoiceActor[];
  pageInfo?: {
    currentPage: number;
    hasNextPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

interface VoiceActor {
  id: number;
  image: {
    large: string;
  };
  language: string;
  name: {
    userPreferred: string;
  };
}
