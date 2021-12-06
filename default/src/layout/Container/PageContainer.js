import React from "react";

import Menu from "layout/SideBar";
import Header from "layout/Header";

import layoutStyles from "styles/customize/layout/LayoutStyles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function withPageContainer(Component) {
    const classes = layoutStyles();

    const BaseContainer = () => {
        return (
            <div className={classes.root}>
                <Header />
                <Menu />
                <main className={classes.main}>
                    <Container maxWidth={false} className={classes.container}>
                        <Paper className={classes.paper} elevation={0}>
                            <Component />
                        </Paper>
                    </Container>
                </main>
            </div>
        );
    };

    return BaseContainer;
}
