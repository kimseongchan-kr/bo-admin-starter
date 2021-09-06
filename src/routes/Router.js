import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import withContainer from "layout/Container";

import Dashboard from "features/summary/Dashboard";
import DashboardDetail from "features/summary/DashboardDetail";
import DashboardUpload from "features/summary/DashboardUpload";

import Example from "features/example/Example";

import ChangeInfo from "features/admin/ChangeInfo";
import ChangePassword from "features/admin/ChangePassword";

import Page404 from "features/404";

import SearchComponent from "features/components/Search";
import TableComponent from "features/components/Table";
import FormComponent from "features/components/Form";
import ButtonComponent from "features/components/Button";
import ModalComponent from "features/components/Modal";
import TypographyComponent from "features/components/Typography";

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={withContainer(Dashboard)} />
            <Route path="/dashboard" exact component={withContainer(Dashboard)} />
            <Route path="/dashboard/detail/:idx" exact component={withContainer(DashboardDetail)} />
            <Route path="/dashboard/upload" exact component={withContainer(DashboardUpload)} />
            <Route path="/dashboard/edit/:idx" exact component={withContainer(DashboardUpload)} />

            <Route path="/example" exact component={withContainer(Example)} />

            <Route path="/info" exact component={withContainer(ChangeInfo)} />
            <Route path="/password" exact component={withContainer(ChangePassword)} />

            <Route path="/search" exact component={withContainer(SearchComponent)} />
            <Route path="/table" exact component={withContainer(TableComponent)} />
            <Route path="/form" exact component={withContainer(FormComponent)} />
            <Route path="/button" exact component={withContainer(ButtonComponent)} />
            <Route path="/modal" exact component={withContainer(ModalComponent)} />
            <Route path="/typography" exact component={withContainer(TypographyComponent)} />

            <Redirect path="/login" to="/" />
            <Route path="*" component={Page404} />
        </Switch>
    );
}
