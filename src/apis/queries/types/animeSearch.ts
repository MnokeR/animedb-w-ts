export interface SearchPages {
  pages: AnimeSearch[];
}

export interface AnimeSearch {
  media: Anime[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  currentPage: number;
  hasNextPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface Anime {
  id: number;
  title: {
    userPreferred: string;
  };
  coverImage: {
    large: string;
    extraLarge: string;
  };
}
