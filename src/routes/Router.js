import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import container from "hoc";
import Summary from "features/summary";
import Example from "features/example";
import ChangePassword from "features/admin/ChangePassword";
export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={container(Summary)} />
            <Route path="/example1" exact component={container(Example)} />
            <Route path="/password" exact component={container(ChangePassword)} />

            <Redirect path="*" to="/" />
        </Switch>
    );
}
