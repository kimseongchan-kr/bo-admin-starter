import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import store from "app/store";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "styles/theme/theme";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import * as serviceWorker from "serviceWorker";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            cacheTime: 0,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnmount: true,
            refetchOnReconnect: false
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <CssBaseline />
                    <QueryClientProvider client={queryClient}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <App />
                        </LocalizationProvider>
                    </QueryClientProvider>
                </Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
