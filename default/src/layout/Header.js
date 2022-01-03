import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "slices/menuSlice";
import { setLogOut } from "slices/loginSlice";

import { makeStyles } from "@mui/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Popover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";

const drawerWidth = 240;
const useStyles = makeStyles(({ palette }) => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingLeft: 0
    },
    dense: {
        minHeight: 80
    },
    appBar: {
        width: "100%",
        height: 80,
        minWidth: 1175,
        top: 0,
        left: 0,
        zIndex: 10,
        color: palette.text.primary,
        backgroundColor: palette.neutral.white
    },
    title: {
        flexGrow: 1
    },
    logoContainer: {
        height: "100%",
        width: drawerWidth,
        marginRight: "24px",
        backgroundColor: palette.neutral.main
    },
    logoButton: {
        height: "100%",
        fontSize: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: palette.neutral.white
    },
    userButton: {
        border: "none",
        boxShadow: "unset",
        backgroundColor: palette.neutral.white,
        "&:hover": {
            border: "none",
            boxShadow: "unset",
            backgroundColor: palette.neutral.white
        },
        "& svg": {
            width: 30,
            height: 30,
            color: palette.primary.main
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
        borderBottom: `1px solid ${palette.border["opacity0.1"]}`,
        "&:last-child": {
            borderBottom: "none"
        }
    }
}));

function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { menuTitle } = useSelector(menuSelector);

    const handlePageChange = (path) => history.push(path);

    const handleLogOut = () => dispatch(setLogOut());

    return (
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolbar} classes={{ dense: classes.dense }}>
                <Box component="div" className={classes.logoContainer}>
                    <ButtonBase disableRipple className={classes.logoButton} component={Link} to="/">
                        {/* <img src={`${LogoImage}`} alt="logo" /> */}
                        ADMIN
                    </ButtonBase>
                </Box>
                <Typography component="h2" variant="h2" color="inherit" className={classes.title}>
                    {menuTitle}
                </Typography>
                <PopupState variant="popover" popupId="filterPopover">
                    {(popupState) => (
                        <div>
                            <Button startIcon={<AccountCircleIcon />} {...bindHover(popupState)} variant="contained" className={classes.userButton}>
                                <Typography variant="button" display="block">
                                    블록오디세이님
                                </Typography>
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                className={classes.popover}
                                classes={{ paper: classes.paper }}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center"
                                }}
                                disableRestoreFocus>
                                <List component="nav" aria-label="admin menu">
                                    <ListItem classes={{ root: classes.listItem }} button onClick={() => handlePageChange("/password")}>
                                        <ListItemText primary="비밀번호 수정" />
                                    </ListItem>
                                    <ListItem classes={{ root: classes.listItem }} button onClick={() => handlePageChange("/info")}>
                                        <ListItemText primary="정보 수정" />
                                    </ListItem>
                                    <ListItem classes={{ root: classes.listItem }} button onClick={handleLogOut}>
                                        <ListItemText primary="로그아웃" />
                                    </ListItem>
                                </List>
                            </Popover>
                        </div>
                    )}
                </PopupState>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
