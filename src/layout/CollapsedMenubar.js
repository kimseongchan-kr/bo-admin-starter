import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "slices/menuSlice";
import { reset } from "slices/searchSlice";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";

import MailIcon from "@material-ui/icons/Mail";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        "& button": {
            width: "100%",
            display: "inline-block",
            padding: "10px 16px 10px 57px",
            color: "#ffffff",
            opacity: 0.8,

            backgroundColor: "#222222",
            border: "none",
            cursor: "pointer",

            fontSize: 14,
            fontFamily: "Noto Sans KR",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "-0.7px",
            textAlign: "left",

            "&:hover": {
                backgroundColor: "#2d2d2d"
            },
            "&:focus": {
                outline: "none",
                border: "none"
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
        cursor: "pointer"
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
        "& button": {
            fontWeight: 500,
            backgroundColor: "#2d2d2d",
            opacity: 1
        }
    }
}));

function Menubar(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { menu, menuNum } = useSelector(menuSelector);
    const [expanded, setExpanded] = useState(menu ? menu : false);

    useEffect(() => {
        setExpanded(menu ? menu : false);
    }, [menu]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
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
            <Box className={classes.toolbar}>
                <Typography variant="h1" component="h1" className={classes.logo} onClick={() => handlePageChange("/")}>
                    ADMIN
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
                            <Typography component="button" onClick={() => handlePageChange("/dashboard")}>
                                Dashboard
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
                            <Typography component="button" onClick={() => handlePageChange("/example")}>
                                Example
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
                            <Typography component="button" onClick={() => handlePageChange("/search")}>
                                Search
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 5 ? classes.active : ""}>
                            <Typography component="button" onClick={() => handlePageChange("/table")}>
                                Table
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 6 ? classes.active : ""}>
                            <Typography component="button" onClick={() => handlePageChange("/form")}>
                                Form
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 7 ? classes.active : ""}>
                            <Typography component="button" onClick={() => handlePageChange("/modal")}>
                                Modal
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 8 ? classes.active : ""}>
                            <Typography component="button" onClick={() => handlePageChange("/typography")}>
                                Typography
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails className={menuNum === 9 ? classes.active : ""}>
                            <Typography component="button" onClick={() => handlePageChange("/button")}>
                                Button
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

export default withRouter(Menubar);
