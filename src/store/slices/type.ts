export interface FilmState {
  searchFilms: {
    name: string;
    rating: string;
    src: string;
    id: number;
  }[];
  selectedFilm: {
    backdrop: string;
    name: string;
    rating: number;
    year: number;
    ageRating: number;
    genres: {
      name: string;
    }[];
    description: string;
  } | null;
  loadingSearchFilms: boolean;
  loadingAboutFilm: boolean;
}
