export interface CoverImageFormat {
  url: string;
}

export interface CoverImageData {
  id: number;
  attributes: {
    formats: {
      thumbnail: CoverImageFormat;
      small: CoverImageFormat;
    };
    url: string;
  };
}

export interface CategoryData {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PostData {
  id: number;
  attributes: {
    title: string;
    content: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: CoverImageData;
    };
    categories: {
      data: CategoryData[];
    };
  };
}
