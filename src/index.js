import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import store from "app/store";

import { ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/theme";
import DefaultStyles from "styles/customize/DefaultStyles";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

import * as serviceWorker from "./serviceWorker";

let persistor = persistStore(store);

ReactDOM.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <DefaultStyles />
                <App />
            </PersistGate>
        </Provider>
    </ThemeProvider>,
    // </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
