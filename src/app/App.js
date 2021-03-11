import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "slices/loginSlice";

import Login from "features/login";
import Router from "routes/Router";

export default function App() {
    const { isLogin } = useSelector(loginSelector);

    return isLogin ? (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Redirect path="*" to="/login" />
            </Switch>
        </BrowserRouter>
    );
}
