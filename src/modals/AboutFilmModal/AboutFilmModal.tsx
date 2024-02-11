import { Modal } from "antd";
import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./style.scss";
import { AppState, useAppSelector } from "../../store/store";
import playIcon from "../../assets/main/modal/play.svg";
import shareIcon from "../../assets/main/modal/share.svg";
import bookmarkIcon from "../../assets/header/bookmark.svg";
import starIcon from "../../assets/main/star.svg";

interface Props {
  visible: boolean;
  onCancel?: () => void;
}

const AboutFilmModal: React.FC<Props> = ({ visible, onCancel }) => {
  const { loadingAboutFilm, selectedFilm } = useAppSelector(
    (state: AppState) => state.film
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    //@ts-ignore
    <LoadingOverlay active={loadingAboutFilm} spinner>
      <Modal
        open={visible}
        onCancel={onCancel}
        footer={null}
        destroyOnClose={true}
        width={900}
      >
        <div className="about-film">
          <div className="about-film__background">
            <img
              src={selectedFilm?.backdrop}
              onLoad={handleImageLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
          </div>

          <div className="about-film__overlay"></div>

          <div className="about-film__content">
            <h4 className="about-film__name">{selectedFilm?.name}</h4>

            <div className="about-film__buttons">
              <div className="about-film__watch flexCenter">
                <div className="about-film__watch-img">
                  <img src={playIcon} />
                </div>
                <span>Смотреть</span>
              </div>

              <div className="about-film__btn flexCenter">
                <div className="about-film__btn-img flexCenter">
                  <img src={bookmarkIcon} />
                </div>
              </div>

              <div className="about-film__btn flexCenter">
                <div className="about-film__btn-img flexCenter">
                  <img src={shareIcon} />
                </div>
              </div>
            </div>

            <div className="about-film__stars">
              <div className="main__film-rating">
                <div className="main__star-img">
                  <img src={starIcon} alt="рейтинг" />
                </div>
                <span className="main__star-count">{selectedFilm?.rating}</span>
              </div>

              <div className="about-film__year">{selectedFilm?.year}</div>
            </div>

            <div className="about-film__age flexCenter">
              <span>{selectedFilm?.ageRating}+</span>
            </div>

            <div className="about-film__genres">
              {selectedFilm?.genres.map((genre) => (
                <span className="about-film__genre">
                  {genre.name.charAt(0).toUpperCase() +
                    genre.name.slice(1).toLowerCase()}
                </span>
              ))}
            </div>

            <div className="about-film__desc">
              <p>{selectedFilm?.description}</p>
            </div>
          </div>
        </div>
      </Modal>
    </LoadingOverlay>
  );
};

export default AboutFilmModal;
