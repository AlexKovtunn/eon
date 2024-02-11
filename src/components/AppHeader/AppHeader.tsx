import "./style.scss";
import BurgerMenu from "./components/BurgerMenu";
import Logo from "./components/Logo";
import HeaderNav from "./components/HeaderNav";
import Input from "./components/Input";
import BookMark from "./components/BookMark";
import User from "./components/User";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__content">
          <BurgerMenu />
          <Logo />
          <HeaderNav />
          <Input />
          <BookMark />
          <User />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
