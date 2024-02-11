import { useEffect, useState } from "react";
import searchIcon from "../../../assets/header/seach-icon.svg";
import clearInputClear from "../../../assets/header/clear-input.svg";
import { useDebounce } from "use-debounce";
import { getFilms, resetSearchFilms } from "../../../store/slices/slice";
import { useAppDispatch } from "../../../store/store";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const [value] = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (value) {
      dispatch(getFilms(value));
    } else {
      dispatch(resetSearchFilms());
    }
  }, [value]);

  const onClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="header__input-wrapper flexCenter">
      <input
        type="text"
        className="header__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!inputValue ? (
        <div className="header__input-text">
          <div className="header__input-img flexCenter">
            <img src={searchIcon} alt="иконочка поиска" />
          </div>
          <span className="header__input-span">Поиск по сайту</span>
        </div>
      ) : (
        <div className="header__input-clear flexCenter" onClick={onClearInput}>
          <img src={clearInputClear} alt="очищалочка" />
        </div>
      )}
    </div>
  );
};

export default Input;
