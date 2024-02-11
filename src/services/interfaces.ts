export interface IKinoPoiskResponse {
  docs: KinoPoiskDocsType[];
}

type KinoPoiskDocsType = {
  poster: {
    previewUrl: string;
  };
  names: { name: string }[];
  rating: {
    imdb: number;
  };
  id: number;
};

export interface IFilmAboutResponse {
  name: string;
  rating: {
    imdb: number;
  };
  backdrop: {
    url: string;
  };
  year: number;
  ageRating: number;
  genres: {
    name: string;
  }[];
  description: string;
}
