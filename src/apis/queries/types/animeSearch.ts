export interface SearchPages {
  pages: AnimeSearch[];
}

export interface AnimeSearch {
  media: Anime[];
  pageInfo: {
    currentPage: number;
    hasNextPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

interface Anime {
  id: number;
  title: {
    userPreferred: string;
  };
  coverImage: {
    large: string;
    extraLarge: string;
  };
}
