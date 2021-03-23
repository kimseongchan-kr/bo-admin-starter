import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector, setMenu } from "slices/menuSlice";
import { reset } from "slices/searchSlice";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Link, Drawer, Typography, Divider, ListItemIcon, List, ListItem } from "@material-ui/core";
import { Mail as MailIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const drawerWidth = 240;
const Accordion = withStyles({
    root: {
        width: "100%",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "#222222",
        marginBottom: -1,
        minHeight: 40,
        "&$expanded": {
            minHeight: 40
        },
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& svg": {
            color: "white"
        }
    },
    content: {
        "&$expanded": {
            margin: "10px 0",
            "& p": {
                fontSize: 15,
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: "-0.45px",
                textAlign: "left",
                color: "#ffffff",
                opacity: 1
            }
        },
        "& p": {
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 0.6
        },
        "& > div": {
            minWidth: 39,
            "& svg": {
                color: "white"
            }
        }
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
    root: {
        padding: 0,
        backgroundColor: "#222222",
        "&:hover": {
            backgroundColor: "#2d2d2d"
        },
        "& p": {
            width: "100%",
            fontSize: 14,
            fontFamily: "Noto Sans KR",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "-0.7px",
            textAlign: "left",
            color: "#ffffff",
            opacity: 0.8,
            textDecoration: "none",
            "& a": {
                color: "#ffffff",
                display: "inline-block",
                width: "100%",
                padding: "10px 16px 10px 57px"
            }
        }
    }
}))(MuiAccordionDetails);

const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#222222",
        color: "white",
        borderRight: "none"
    },
    list: {
        paddingTop: 4,
        paddingBottom: 4
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
        background: `transparent url("") 0% 0% no-repeat padding-box`,
        backgroundSize: "95%"
    },
    ul: {
        height: "100vh",
        marginBottom: 50
    },
    copyright: {
        width: 175,
        height: "auto",
        margin: "20px 0 40px 30px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        "& p": {
            textAlign: "left",
            fontSize: 12,
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
            color: "#ffffff",
            opacity: 0.5
        }
    },
    active: {
        background: "#2d2d2d",
        "& p": {
            opacity: 1
        },
        "& a": {
            fontWeight: 500
        }
    }
}));

export default function Menubar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const menuList = useSelector(menuSelector);
    const { menu, menuNum } = menuList;

    const [expanded, setExpanded] = useState(menu ? menu : false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePageChange = (menu) => {
        dispatch(setMenu(menu));
        dispatch(reset());
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <Box className={classes.toolbar}>
                <Typography variant="h1" component="h1">
                    <Link component={RouterLink} className={classes.logo} to="/" onClick={() => handlePageChange({ menu: "summary", title: "Dashboard", num: 1 })}>
                        LOGO
                    </Link>
                </Typography>
            </Box>
            <Divider />
            <List className={classes.ul}>
                <ListItem className={classes.list}>
                    <Accordion square expanded={expanded === "summary"} onChange={handleChange("summary")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel1d-content`} id={`panel1d-header`}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <Typography>Summary</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={menuNum === 1 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/dashboard" onClick={() => handlePageChange({ menu: "summary", title: "Dashboard", num: 1 })}>
                                    Dashboard
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 2 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/summary" onClick={() => handlePageChange({ menu: "summary", title: "Summary", num: 2 })}>
                                    Summary
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem className={classes.list}>
                    <Accordion square expanded={expanded === "example"} onChange={handleChange("example")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel2d-content`} id={`pane2d-header`}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <Typography>Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={menuNum === 3 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/example" onClick={() => handlePageChange({ menu: "example", title: "Example", num: 3 })}>
                                    Example
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem className={classes.list}>
                    <Accordion square expanded={expanded === "components"} onChange={handleChange("components")}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel3d-content`} id={`pane3d-header`}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <Typography>Components</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={menuNum === 4 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/search" onClick={() => handlePageChange({ menu: "components", title: "Search", num: 4 })}>
                                    Search
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 5 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/table" onClick={() => handlePageChange({ menu: "components", title: "Table", num: 5 })}>
                                    Table
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 6 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/form" onClick={() => handlePageChange({ menu: "components", title: "Form", num: 6 })}>
                                    Form
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 7 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/modal" onClick={() => handlePageChange({ menu: "components", title: "Modal", num: 7 })}>
                                    Modal
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 8 ? classes.active : ""}>
                            <Typography className="nav-link">
                                <RouterLink to="/typography" onClick={() => handlePageChange({ menu: "components", title: "Typography", num: 8 })}>
                                    Table
                                </RouterLink>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
            </List>
            <Box className={classes.copyright}>
                <p>
                    Copyright © Blockodyssey Corp. <br />
                    All rights reserved.
                </p>
            </Box>
        </Drawer>
    );
}
