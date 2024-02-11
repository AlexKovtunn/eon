import "./App.css";
import Main from "./views/Main/Main";
import AppHeader from "./components/AppHeader/AppHeader";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <Main />
    </Provider>
  );
}

export default App;
