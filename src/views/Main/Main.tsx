import React, { useState } from "react";
import "./style.scss";
import { Col, Row } from "antd";
import popularFilms from "./popularFilms";
import FilmItem from "./components/FilmItem/FilmItem";
import MainRow from "./components/MainRow/MainRow";
import watchedFilms from "./watchedFilms";
import { AppState, useAppDispatch, useAppSelector } from "../../store/store";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import AboutFilmModal from "../../modals/AboutFilmModal/AboutFilmModal";
import { getAboutFilm, resetSelectedFilm } from "../../store/slices/slice";

const Main = () => {
  const { searchFilms, loadingSearchFilms } = useAppSelector(
    (state: AppState) => state.film
  );
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchAboutFilm = (id: number) => {
    dispatch(getAboutFilm(id));
  };

  const onClickFilm = () => {
    setActiveModal(true);
  };

  const onCancel = () => {
    setActiveModal(false);
    dispatch(resetSelectedFilm());
  };

  return (
    <main className="main">
      <div className="wrapper">
        <div className="main__content">
          {searchFilms.length ? (
            //@ts-ignore
            <LoadingOverlay active={loadingSearchFilms} spinner>
              <MainRow
                title="Результаты поиска"
                films={searchFilms}
                onClickFilm={onClickFilm}
                fetchAboutFilm={fetchAboutFilm}
              />
            </LoadingOverlay>
          ) : (
            <>
              <MainRow title="Популярные" films={popularFilms} />
              <MainRow title="Недавно просмотренные" films={watchedFilms} />
            </>
          )}
        </div>
      </div>

      <AboutFilmModal visible={activeModal} onCancel={onCancel} />
    </main>
  );
};

export default Main;
