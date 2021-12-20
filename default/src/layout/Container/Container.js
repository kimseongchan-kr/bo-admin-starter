import React from "react";

import Menu from "layout/sidebar";
import Header from "layout/Header";

import layoutStyles from "styles/customize/layout/LayoutStyles";
import Container from "@mui/material/Container";

export default function withContainer(Component) {
    const classes = layoutStyles();

    const BaseContainer = () => {
        return (
            <div className={classes.root}>
                <Header />
                <Menu />
                <main className={classes.main}>
                    <Container maxWidth={false} className={classes.container}>
                        <Component />
                    </Container>
                </main>
            </div>
        );
    };

    return BaseContainer;
}
