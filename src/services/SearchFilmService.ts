import { AxiosResponse } from "axios";
import api, { apiKinoPoisk } from "../api/configureAxios";
import { IFilmAboutResponse, IKinoPoiskResponse } from "./interfaces";

export const SearchFilmService = {
  search: (payload: string): Promise<AxiosResponse<any>> => {
    return api.get(`?t=${payload}&plot=full&apikey=ca6cf765`);
  },
  searchKinoPoisk: (
    payload: string
  ): Promise<AxiosResponse<IKinoPoiskResponse>> => {
    return apiKinoPoisk.get(`search?page=1&limit=10&query=${payload}`, {
      headers: {
        "X-API-KEY": "9JFJ185-X1RM65P-J50XF6H-RHB1DV4",
      },
    });
  },
  searchFilm: (id: number): Promise<AxiosResponse<IFilmAboutResponse>> => {
    return apiKinoPoisk.get(`${id}`, {
      headers: {
        "X-API-KEY": "9JFJ185-X1RM65P-J50XF6H-RHB1DV4",
      },
    });
  },
};
