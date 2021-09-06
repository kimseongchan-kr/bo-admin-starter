import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "slices/loginSlice";

import Login from "features/login";
import Router from "routes/Router";

export default function App() {
    const { isLogin } = useSelector(loginSelector);

    const PrivateRoutes = () => (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router />
        </BrowserRouter>
    );

    const PublicRoutes = () => (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Redirect path="*" to="/login" />
            </Switch>
        </BrowserRouter>
    );

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
