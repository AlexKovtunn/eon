import { Col, Row } from "antd";
import React from "react";
import FilmItem, { IFilmItem } from "../FilmItem/FilmItem";

interface MainRowProps {
  title: string;
  films: IFilmItem[];
  onClickFilm?: () => void;
  fetchAboutFilm?: (id: number) => void;
}

const MainRow: React.FC<MainRowProps> = ({
  title,
  films,
  onClickFilm,
  fetchAboutFilm,
}) => {
  const onClickItem = (id: number) => {
    console.log();
    fetchAboutFilm && fetchAboutFilm(id);
    onClickFilm && onClickFilm();
  };

  return (
    <div className="main__row">
      <h2 className="main__title">{title}</h2>
      <Row className="main__list">
        {films.map((film, index) => (
          <Col
            className="main__list-item"
            onClick={() => film.id && onClickItem(film.id)}
            style={{ cursor: fetchAboutFilm ? "pointer" : "default" }}
          >
            <FilmItem item={film} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainRow;
