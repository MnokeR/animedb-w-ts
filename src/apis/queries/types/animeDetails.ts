import { AnimeCharacters } from "./animeCharacters";

export interface RespData<T> {
  data: {
    data: T;
  };
}

export interface AnimeDetails {
  Media: {
    id: number;
    title: {
      userPreferred: string;
      romaji: string;
      english: string;
      native: string;
    };
    coverImage: {
      extraLarge: string;
      large: string;
    };
    bannerImage: string;
    startDate: {
      year: number;
      month: number;
      day: number;
    };
    description: string;
    season: string;
    seasonYear: number;
    type: string;
    format: string;
    status: string;
    episodes: number;
    duration: number;
    genres: string[];
    synonyms: string[];
    source: string[];
    isAdult: boolean;
    meanScore: number | null;
    averageScore: number | null;
    relations: Relations;
    studios: Studios;
    externalLinks: {
      id: number | null;
      site: string | null;
      url: string | null;
      type: string | null;
      language: string | null;
      color: string | null;
      icon: string | null;
      notes: string | null;
    };
    streamingEpisodes: {
      site: string | null;
      title: string | null;
      thumbnail: string | null;
      url: string | null;
    };
    trailer: {
      id: string | null;
      site: string | null;
    };
    rankings: Rankings[];
    tags: {
      id: number | null;
      name: string | null;
      description: string | null;
      rank: number | null;
    };
    characterPreview: AnimeCharacters;
  };
}

interface Relations {
  edges: RelationsEdge[];
}

interface RelationsEdge {
  id: number;
  relationType: string;
  node: {
    id: number;
    title: {
      userPreferred: string;
    };
    format: string;
    type: string;
    status: string;
    bannerImage: string;
    coverImage: {
      large: string;
    };
  };
}

interface Studios {
  edges: StudiosEdge[];
}

interface StudiosEdge {
  isMain: boolean | null;
  node: {
    id: number | null;
    name: string | null;
  };
}

interface Rankings {
  id: number | null;
  rank: number | null;
  type: string | null;
  format: string | null;
  year: number | null;
  season: string | null;
  allTime: boolean;
  context: string | null;
}
