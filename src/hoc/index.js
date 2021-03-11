import React from "react";

import Menu from "layout/Menubar";
import Header from "layout/Header";
import layoutStyles from "styles/customize/LayoutStyles";

export default function withAuth(Component) {
    const classes = layoutStyles();

    const Container = () => {
        return (
            <div className={classes.root}>
                <Header />
                <Menu />
                <div className={classes.content}>
                    <Component />
                </div>
            </div>
        );
    };
    return Container;
}
