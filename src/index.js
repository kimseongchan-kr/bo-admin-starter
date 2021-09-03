import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import store from "app/store";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme/theme";

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
                <CssBaseline />
                <App />
            </PersistGate>
        </Provider>
    </ThemeProvider>,
    // </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
