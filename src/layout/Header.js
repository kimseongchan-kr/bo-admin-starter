import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Popover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import user from "assets/Images/img_logout.png";
import { useSelector } from "react-redux";
import { menuSelector } from "slices/menuSlice";

const drawerWidth = 240; // Menubar의 넓이
const useStyles = makeStyles((theme) => ({
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
    return <ListItem button component="a" {...props} />;
}

export default function Dashboard() {
    const classes = useStyles();
    const { menuTitle } = useSelector(menuSelector);

    const handleLogOut = () => {
        console.log("logout");
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
                                        <ListItemLink classes={{ root: classes.listItem }} href="/myinfo">
                                            <ListItemText primary="정보수정" />
                                        </ListItemLink>
                                        <ListItemLink classes={{ root: classes.listItem }} href="/password">
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
