import React from "react";

// import Menu from "layout/CollapsedMenubar";
import Menu from "layout/SingleMenubar";
import Header from "layout/Header";

import Container from "@material-ui/core/Container";
import layoutStyles from "styles/customize/layout/LayoutStyles";

import Modal from "react-modal";
Modal.setAppElement("body");

export default function withContainer(Component) {
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
