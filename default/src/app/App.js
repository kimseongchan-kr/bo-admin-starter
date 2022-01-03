import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "slices/loginSlice";

import Login from "features/login";
import Router from "routes/Router";

const PrivateRoutes = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

const PublicRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Redirect path="*" to="/login" />
        </Switch>
    </BrowserRouter>
);

export default function App() {
    const { isLogin } = useSelector(loginSelector);

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
