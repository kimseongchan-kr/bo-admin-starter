import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector, setMenu } from "slices/menuSlice";
import { setLogOut } from "slices/loginSlice";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText } from "@material-ui/core";

import Popover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";

import user from "assets/Images/img_logout.png";

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
        backgroundColor: "white",
        color: "#333333"
    },
    title: {
        flexGrow: 1
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

function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
}

export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { menuTitle } = useSelector(menuSelector);

    const handleLogOut = () => {
        console.log("logout");
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
                                <IconButton {...bindHover(popupState)} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                                    <img className={classes.userImage} src={user} alt="" width={30} height={30} />
                                    <Typography variant="button" display="block">
                                        블록오디세이님
                                    </Typography>
                                </IconButton>
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
                                        <ListItemLink classes={{ root: classes.listItem }} to="/info" onClick={() => dispatch(setMenu({ menu: null, title: "정보 변경", num: 0 }))}>
                                            <ListItemText primary="정보수정" />
                                        </ListItemLink>
                                        <ListItemLink classes={{ root: classes.listItem }} to="/password" onClick={() => dispatch(setMenu({ menu: null, title: "비밀번호 변경", num: 0 }))}>
                                            <ListItemText primary="비밀번호 변경" />
                                        </ListItemLink>
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
