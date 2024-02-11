import React from "react";
import burgerIcon from "../../../assets/header/burger.svg";

const BurgerMenu = () => {
  return (
    <div className="header__burger flexCenter">
      <img src={burgerIcon} alt="иконочка меню" />
    </div>
  );
};

export default BurgerMenu;
