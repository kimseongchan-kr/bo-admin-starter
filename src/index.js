import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import store from "app/store";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme/theme";

import { Provider } from "react-redux";

import * as serviceWorker from "serviceWorker";

ReactDOM.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </ThemeProvider>,
    // </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
