import './App.css';
import ComponentsDashboard from '@pages/componentsDashboard';
import Login from "@pages/login";
import {Provider} from "react-redux";
import {persistedStore, store} from "@redux/store/store";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    {/* <ComponentsDashboard/> */}
                    <Login/>
                </PersistGate>
            </Provider>

        </>
    );
}

export default App;
