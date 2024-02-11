import React, { useState } from "react";
import starIcon from "../../../../assets/main/star.svg";
import "./style.scss";
import undefinedPoster from "../../../../assets/main/undefined-poster.png";
import LoadingOverlay from "react-loading-overlay";

export interface IFilmItem {
  name: string;
  rating: string;
  src: string;
  id?: number;
}

const FilmItem: React.FC<{ item: IFilmItem }> = ({ item }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div className="main__film-img flexCenter">
        {/* @ts-ignore */}
        <LoadingOverlay active={isLoading} spinner>
          <img
            src={item.src ? item.src : undefinedPoster}
            alt="постер"
            onLoad={handleImageLoad}
          />
        </LoadingOverlay>
      </div>
      <h3 className="main__film-name">{item.name}</h3>
      <div className="main__film-rating">
        <div className="main__star-img">
          <img src={starIcon} alt="рейтинг" />
        </div>
        <span className="main__star-count">{item.rating}</span>
      </div>
    </>
  );
};

export default FilmItem;
