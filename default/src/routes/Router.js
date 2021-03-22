import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "hoc";

import Dashboard from "features/summary/Dashboard";
import Summary from "features/summary/Summary";

import Example from "features/example/Example";

import ChangeInfo from "features/admin/ChangeInfo";
import ChangePassword from "features/admin/ChangePassword";

import Page404 from "features/404";

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Container(Dashboard)} />
            <Route path="/dashboard" exact component={Container(Dashboard)} />
            <Route path="/summary" exact component={Container(Summary)} />

            <Route path="/example" exact component={Container(Example)} />

            <Route path="/info" exact component={Container(ChangeInfo)} />
            <Route path="/password" exact component={Container(ChangePassword)} />

            <Route path="*" component={Page404} />
        </Switch>
    );
}
