import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SearchFilmService } from "../../services/SearchFilmService";
import { FilmState } from "./type";

export const getFilms = createAsyncThunk(
  "film/get",
  async (payload: string, { dispatch }) => {
    dispatch(setLoadingSearchFilms(true));
    try {
      const response = await SearchFilmService.searchKinoPoisk(payload);
      return response.data.docs;
    } catch (e) {
    } finally {
    }
  }
);

export const getAboutFilm = createAsyncThunk(
  "film/getFilm",
  async (id: number, { dispatch }) => {
    dispatch(setLoadingAboutFilm(true));
    try {
      const response = await SearchFilmService.searchFilm(id);
      return response.data;
    } catch (e) {
    } finally {
    }
  }
);

const initialState: FilmState = {
  searchFilms: [],
  loadingSearchFilms: false,
  loadingAboutFilm: false,
  selectedFilm: null,
};

const filmSlice = createSlice({
  name: "film",
  initialState: initialState,
  reducers: {
    resetSearchFilms: (state) => {
      state.searchFilms = [];
    },
    setLoadingSearchFilms: (state, action) => {
      state.loadingSearchFilms = action.payload;
    },
    setLoadingAboutFilm: (state, action) => {
      state.loadingAboutFilm = action.payload;
    },
    resetSelectedFilm: (state) => {
      state.selectedFilm = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilms.fulfilled, (state, action) => {
      if (action.payload) {
        const films = action.payload;
        state.searchFilms = films.map((film) => ({
          name: film.names[0].name,
          rating: film.rating.imdb ? `${film.rating.imdb}` : "0.0",
          src: film.poster.previewUrl,
          id: film.id,
        }));
      } else {
        state.searchFilms = [];
      }

      state.loadingSearchFilms = false;
    });
    builder.addCase(getAboutFilm.fulfilled, (state, action) => {
      if (action.payload) {
        state.selectedFilm = {
          ...action.payload,
          rating: action.payload.rating.imdb,
          backdrop: action.payload.backdrop.url,
        };
      }
      console.log(action.payload);
      state.loadingAboutFilm = false;
    });
  },
});

export const {
  resetSearchFilms,
  setLoadingSearchFilms,
  setLoadingAboutFilm,
  resetSelectedFilm,
} = filmSlice.actions;
export default filmSlice.reducer;
