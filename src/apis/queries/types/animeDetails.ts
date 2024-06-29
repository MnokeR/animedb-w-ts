export interface AnimeDetails {
  media: {
    id: number;
    title: {
      userPreferred: string | null;
      romaji: string | null;
      english: string | null;
      native: string | null;
    };
    coverImage: {
      extraLarge: string | null;
      large: string | null;
    };
    bannerImage: string;
    startDate: {
      year: number | null;
      month: number | null;
      day: number | null;
    };
    description: string | null;
    season: string | null;
    seasonYear: number | null;
    type: string | null;
    format: string | null;
    status: string | null;
    episodes: number | null;
    duration: number | null;
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
  };
}

interface Relations {
  edges: RelationsEdge[];
}

interface RelationsEdge {
  id: number | null;
  relationType: string | null;
  node: {
    id: number | null;
    title: {
      userPreferred: string | null;
    };
    format: string | null;
    type: string | null;
    status: string | null;
    bannerImage: string | null;
    coverImage: {
      large: string | null;
    };
  };
}

interface Studios {
  edges: StudiosEdge[];
}

interface StudiosEdge {
  edges: {
    isMain: boolean | null;
    node: {
      id: number | null;
      name: string | null;
    };
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
