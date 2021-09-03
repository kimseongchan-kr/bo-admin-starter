import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "slices/menuSlice";
import { reset } from "slices/searchSlice";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#222222",
        color: "white",
        borderRight: "none",
        overflowX: "hidden"
    },
    nav: {
        height: "100vh",
        marginBottom: 50,
        "& .MuiListItem-root.Mui-selected": {
            backgroundColor: "#2d2d2d"
        }
    },
    list: {
        width: "100%",
        height: 53,
        margin: "0 auto",
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "#222222",
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& > div:first-child": {
            minWidth: 30
        },
        // 아이콘 사이즈
        "& svg": {
            minWidth: 20,
            color: "white",
            width: 20,
            height: 20
        },
        "& span": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 0.7
        }
    },
    active: {
        width: "100%",
        height: 53,
        margin: "0 auto",
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "#222222",
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& > div:first-child": {
            minWidth: 30
        },
        // 아이콘  사이즈
        "& svg": {
            minWidth: 20,
            color: "white",
            width: 20,
            height: 20
        },
        "& span": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 1
        }
    },
    nested: {
        height: 53,
        backgroundColor: "#222222",
        paddingLeft: 72,
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& svg": {
            minWidth: 40,
            color: "white"
        },
        "& span": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 0.7
        }
    },
    nestedActive: {
        height: 53,
        backgroundColor: "#222222",
        paddingLeft: 72,
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& svg": {
            minWidth: 40,
            color: "white"
        },
        "& span": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 1
        }
    },
    toolbar: {
        minHeight: 80,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "left",
        background: "#222222"
    },
    logo: {
        width: 87,
        height: 30,
        marginLeft: 32,
        cursor: "pointer",
        fontWeight: 600
    },
    copyright: {
        width: 175,
        height: "auto",
        margin: "20px 0 40px 30px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        "& p": {
            textTransform: "uppercase",
            textAlign: "left",
            fontSize: 12,
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
            color: "#ffffff",
            opacity: 0.5
        }
    }
}));

function Menubar(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { menu, menuNum } = useSelector(menuSelector);
    const [expanded, setExpanded] = useState(menu ? menu : false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setExpanded((prev) => (prev !== menu ? menu : prev));
        setOpen(menu === "components" ? true : false);
    }, [menu]);

    const handleChange = (panel) => {
        setExpanded(panel);
        setOpen(!open);
    };

    const handlePageChange = (path) => {
        dispatch(reset());
        return props.history.push(path);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}>
            <div className={classes.toolbar}>
                <Typography variant="h1" component="h1" className={classes.logo} onClick={() => handlePageChange("/")}>
                    ADMIN
                </Typography>
            </div>
            <List component="nav" className={classes.nav} aria-label="main navigation">
                <ListItem button selected={menuNum === 1} className={menuNum === 1 ? classes.active : classes.list} onClick={() => handlePageChange("/dashboard")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <Divider />
                <ListItem button selected={menuNum === 3} className={menuNum === 3 ? classes.active : classes.list} onClick={() => handlePageChange("/example")}>
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Example" />
                </ListItem>
                <Divider />
                <ListItem button className={expanded === "components" ? classes.active : classes.list} onClick={() => handleChange("components")}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Components" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={menu === "components" || expanded === "components" ? true : false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button selected={menuNum === 4} className={menuNum === 4 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/search")}>
                            <ListItemText primary="Search" />
                        </ListItem>
                        <ListItem button selected={menuNum === 5} className={menuNum === 5 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/table")}>
                            <ListItemText primary="Table" />
                        </ListItem>
                        <ListItem button selected={menuNum === 6} className={menuNum === 6 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/form")}>
                            <ListItemText primary="Form" />
                        </ListItem>
                        <ListItem button selected={menuNum === 7} className={menuNum === 7 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/modal")}>
                            <ListItemText primary="Modal" />
                        </ListItem>
                        <ListItem button selected={menuNum === 8} className={menuNum === 8 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/typography")}>
                            <ListItemText primary="Typography" />
                        </ListItem>
                        <ListItem button selected={menuNum === 9} className={menuNum === 9 ? classes.nestedActive : classes.nested} onClick={() => handlePageChange("/button")}>
                            <ListItemText primary="Button" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <div className={classes.copyright}>
                <p>
                    Copyright © Blockodyssey Corp. <br />
                    All rights reserved.
                </p>
            </div>
        </Drawer>
    );
}

export default withRouter(Menubar);
