import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector, setMenu } from "slices/menuSlice";
import { setLogOut } from "slices/loginSlice";

import { makeStyles, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Button } from "@material-ui/core";

import Popover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";

import user from "assets/images/logout.png";
import { reset } from "slices/searchSlice";

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24
    },
    dense: {
        minHeight: 80
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        height: 80,
        minWidth: 1175,
        top: 0,
        left: 240,
        zIndex: 10,
        backgroundColor: "#ffffff",
        color: "#333333"
    },
    title: {
        flexGrow: 1
    },
    userButton: {
        border: "none",
        boxShadow: "unset",
        backgroundColor: "#ffffff",
        "&:hover": {
            border: "none",
            boxShadow: "unset",
            backgroundColor: "#ffffff"
        }
    },
    userImage: {
        marginRight: 9.5
    },
    listItem: {
        width: 140,
        height: 32,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 30,
        paddingleft: 0,
        textAlign: "right",
        borderBottom: "1px solid #3d39351a",
        "&:last-child": {
            borderBottom: "none"
        }
    }
}));

function Header(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { menuTitle } = useSelector(menuSelector);

    const handlePageChange = (menu, path) => {
        dispatch(setMenu(menu));
        props.history.push(path);
    };

    const handleLogOut = () => {
        console.log("logout");
        // localStorage에 있는 값들을 반드시 초기화
        dispatch(reset());
        dispatch(setMenu({ menu: "summary", title: "Dashboard", num: 1 }));
        dispatch(setLogOut());
    };

    return (
        <AppBar position="absolute" elevation={0} className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolbar} classes={{ dense: classes.dense }}>
                <Typography component="h2" variant="h2" color="inherit" className={classes.title}>
                    {menuTitle}
                </Typography>
                <div>
                    <PopupState variant="popover" popupId="filterPopover">
                        {(popupState) => (
                            <div>
                                <Button {...bindHover(popupState)} variant="contained" className={classes.userButton}>
                                    <img src={user} alt="login user" width={30} height={30} className={classes.userImage} />
                                    <Typography variant="button" display="block">
                                        블록오디세이님
                                    </Typography>
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    className={classes.popover}
                                    classes={{
                                        paper: classes.paper
                                    }}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center"
                                    }}
                                    disableRestoreFocus
                                >
                                    <List component="nav" aria-label="admin menu">
                                        <ListItem classes={{ root: classes.listItem }} button onClick={() => handlePageChange({ menu: null, title: "비밀번호 변경", num: 0 }, "/password")}>
                                            <ListItemText primary="비밀번호 변경" />
                                        </ListItem>
                                        <ListItem classes={{ root: classes.listItem }} button onClick={() => handlePageChange({ menu: null, title: "정보 변경", num: 0 }, "/info")}>
                                            <ListItemText primary="정보 변경" />
                                        </ListItem>
                                        <ListItem classes={{ root: classes.listItem }} button onClick={handleLogOut}>
                                            <ListItemText primary="로그아웃" />
                                        </ListItem>
                                    </List>
                                </Popover>
                            </div>
                        )}
                    </PopupState>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
