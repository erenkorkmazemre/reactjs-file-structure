import "./App.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "@redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import RouterGlobal from "./container/RouterGlobal";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <RouterGlobal />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
