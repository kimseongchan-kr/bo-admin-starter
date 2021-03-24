import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Container from "hoc";

import Dashboard from "features/summary/Dashboard";
import Summary from "features/summary/Summary";

import Example from "features/example/Example";

import ChangeInfo from "features/admin/ChangeInfo";
import ChangePassword from "features/admin/ChangePassword";

import Page404 from "features/404";

import SearchComponent from "features/components/Search";
import TableComponent from "features/components/Table";
import FormComponent from "features/components/Form";
import ButtonComponent from "features/components/Button";

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Container(Dashboard)} />
            <Route path="/dashboard" exact component={Container(Dashboard)} />
            <Route path="/summary" exact component={Container(Summary)} />

            <Route path="/example" exact component={Container(Example)} />

            <Route path="/info" exact component={Container(ChangeInfo)} />
            <Route path="/password" exact component={Container(ChangePassword)} />

            <Route path="/search" exact component={Container(SearchComponent)} />
            <Route path="/table" exact component={Container(TableComponent)} />
            <Route path="/form" exact component={Container(FormComponent)} />
            <Route path="/button" exact component={Container(ButtonComponent)} />

            <Redirect path="/login" to="/" />
            <Route path="*" component={Page404} />
        </Switch>
    );
}
