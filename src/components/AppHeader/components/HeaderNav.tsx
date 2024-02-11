import { useState } from "react";

const HeaderNav = () => {
  const items = ["Главная", "Фильмы", "Сериалы"];
  const [activeIndex, setActiveIndex] = useState(1);

  const onClickItem = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {items.map((item, index) => (
          <li
            className={`header__nav-list-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => onClickItem(index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
