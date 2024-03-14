import userImg from "../../../assets/header/compressedUser.jpg";
import arrowDownIcon from "../../../assets/header/arrow-down.svg";

const User = () => {
  return (
    <div className="header__user">
      <div className="header__user-img flexCenter">
        <img src={userImg} alt="фоточка юзера" />
      </div>
      <img src={arrowDownIcon} alt="стрелочка вниз" />
    </div>
  );
};

export default User;
