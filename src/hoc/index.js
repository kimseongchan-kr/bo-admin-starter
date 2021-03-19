import React from "react";

import Menu from "layout/Menubar";
import Header from "layout/Header";
import { Container } from "@material-ui/core";
import layoutStyles from "styles/customize/LayoutStyles";

export default function container(Component) {
    const classes = layoutStyles();

    const BaseContainer = () => {
        return (
            <div className={classes.root}>
                <Header />
                <Menu />
                <div className={classes.content}>
                    <main className={classes.main}>
                        <Container maxWidth={false} className={classes.container} classes={{ root: classes.containerRoot }}>
                            <div className={classes.appBarSpacer} />
                            <Component />
                        </Container>
                    </main>
                </div>
            </div>
        );
    };

    return BaseContainer;
}
