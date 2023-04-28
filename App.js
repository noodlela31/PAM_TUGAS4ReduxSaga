import { Provider } from "react-redux";
import configureStore from "./configureStore";
import MainComponent from "./MainComponent";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
