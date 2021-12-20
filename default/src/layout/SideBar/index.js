import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "slices/menuSlice";
import { reset } from "slices/searchSlice";

import MenuData from "layout/sidebar/Data";
import { isEmpty } from "utils/common";

import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const drawerWidth = 240;
const useStyles = makeStyles(({ palette }) => ({
    drawer: {
        width: drawerWidth,
        height: "100%",
        boxSizing: "border-box"
    },
    scrollHeight: {
        height: "calc(100% - 145px)"
    },
    drawerPaper: {
        width: drawerWidth,
        top: 80,
        paddingTop: 20,
        color: palette.neutral["white"],
        background: palette.neutral["main"],
        borderRight: "none"
    },
    list: {
        "& .MuiListItem-root.Mui-selected": {
            backgroundColor: palette.background["main"],
            "& p": {
                color: palette.text["primary"]
            },
            "& svg": {
                color: palette.text["primary"]
            }
        }
    },
    caption: {
        width: "90%",
        margin: "0 auto",
        color: palette.neutral["white"],
        fontSize: 14,
        lineHeight: "32px",
        fontWeight: 500
    },
    listItem: {
        width: "90%",
        height: 43,
        margin: "5px auto 0",
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: palette.neutral["main"],
        borderRadius: 4,
        "&:hover": {
            borderRadius: 4,
            backgroundColor: palette.background["main"],
            "& p": {
                color: palette.text["primary"]
            },
            "& svg": {
                color: palette.text["primary"]
            }
        },
        "& > div:first-child": {
            minWidth: 30
        },
        "& svg": {
            minWidth: 20,
            color: palette.neutral["white"],
            width: 20,
            height: 20
        },
        "& p": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "-0.45px",
            textAlign: "left",
            color: palette.neutral["white"],
            opacity: 0.7
        }
    },
    collapsedList: {
        "&& > .MuiListItem-root.Mui-selected": {
            backgroundColor: palette.background["lightOpacity0.7"],
            "& p": {
                color: palette.text["primary"]
            },
            "& svg": {
                color: palette.text["primary"]
            },
            opacity: 0.7
        },
        "& .MuiListItem-root.Mui-selected": {
            backgroundColor: palette.background["main"],
            "& p": {
                color: palette.text["primary"]
            },
            "& svg": {
                color: palette.text["primary"]
            }
        }
    },
    copyright: {
        width: "100%",
        padding: "10px 0 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& p": {
            textAlign: "left",
            fontSize: 12,
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
            color: palette.neutral["white"],
            opacity: 0.5
        }
    },
    divider: {
        width: "90%",
        margin: "10px auto",
        backgroundColor: "rgba(255,255,255,0.5)"
    }
}));

function SideBar({ adminType = "private" }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { menuNum } = useSelector(menuSelector);
    const [open, setOpen] = useState({});

    const menuType = (() => {
        switch (adminType) {
            case "public":
                return "public";
            case "private":
                return "private";
            default:
                return "";
        }
    })();

    const handleToggleMenu = (menu) => setOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));

    const handlePageChange = (path) => {
        dispatch(reset());
        return history.push(path);
    };

    useEffect(() => {
        if (!isEmpty(menuNum)) {
            let initMenu = {};
            MenuData[menuType]?.map((group) => {
                group?.siblings?.map((menus) => {
                    if (menus.subMenus) {
                        initMenu[menus.menu] = menus.subMenus.some((menu) => menu.num === Number(menuNum));
                    } else {
                        initMenu[menus.menu] = false;
                    }
                    return initMenu;
                });
                return initMenu;
            });
            setOpen(initMenu);
        }
    }, [menuNum, menuType]);

    return (
        <Box component="nav" sx={{ display: "flex" }} aria-label="mailbox folders">
            <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent" anchor="left">
                <PerfectScrollbar component="div" className={classes.scrollHeight}>
                    {MenuData[menuType]?.map((group, index) => (
                        <React.Fragment key={`navigation-${index}`}>
                            <List
                                component="div"
                                className={group.menu.some((menuName) => open[menuName]) ? classes.collapsedList : classes.list}
                                subheader={
                                    <>
                                        {group.setCaption ? (
                                            <Typography className={classes.caption} variant="caption" display="block">
                                                {group.caption}
                                            </Typography>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                }>
                                {group?.siblings?.map((menu, index) => (
                                    <React.Fragment key={`collapsed-menu-${index}`}>
                                        {menu?.subMenus ? (
                                            <React.Fragment key={`list-${index}`}>
                                                <ListItem
                                                    button
                                                    disabled={menu.disabled}
                                                    selected={menu.subMenus.some((subMenu) => subMenu.num === Number(menuNum))}
                                                    className={classes.listItem}
                                                    onClick={() => handleToggleMenu(menu.menu)}>
                                                    <ListItemIcon>{menu.icon}</ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Typography component="p" variant="h5">
                                                                {menu.menuTitle}
                                                            </Typography>
                                                        }
                                                    />
                                                    {open[menu.menu] ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={open[menu.menu]} unmountOnExit>
                                                    <List component="div">
                                                        {menu.subMenus.map((subMenu, index) => (
                                                            <ListItem
                                                                button
                                                                key={`sub-menu-${index}`}
                                                                disabled={subMenu.disabled}
                                                                selected={menuNum === subMenu.num}
                                                                className={classes.listItem}
                                                                sx={{ borderRadius: `12px`, paddingLeft: `46px` }}
                                                                onClick={() => handlePageChange(subMenu.path)}>
                                                                <ListItemIcon>{subMenu.icon}</ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        <Typography component="p" variant="h5">
                                                                            {subMenu.menuTitle}
                                                                        </Typography>
                                                                    }
                                                                />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            </React.Fragment>
                                        ) : (
                                            <ListItem button disabled={menu.disabled} className={classes.listItem} selected={menuNum === menu.num} onClick={() => handlePageChange(menu.path)}>
                                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography component="p" variant="h5">
                                                            {menu.menuTitle}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        )}
                                    </React.Fragment>
                                ))}
                            </List>
                            <Divider className={classes.divider} />
                        </React.Fragment>
                    ))}
                </PerfectScrollbar>
                <Box className={classes.copyright}>
                    <p>
                        Copyright © Blockodyssey Corp. <br />
                        All rights reserved.
                    </p>
                </Box>
            </Drawer>
        </Box>
    );
}

export default withRouter(SideBar);
