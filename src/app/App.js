import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "slices/loginSlice";

import Login from "features/login";
import Router from "routes/Router";

export default function App() {
    const { isLogin } = useSelector(loginSelector);

    const PrivateRoutes = () => (
        <HashRouter>
            <Router />
        </HashRouter>
    );

    const PublicRoutes = () => (
        <HashRouter>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Redirect path="*" to="/login" />
            </Switch>
        </HashRouter>
    );

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
