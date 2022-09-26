import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

export default function AppBar(props) {
  let navigate = useNavigate();

  return (
    <AppBarStyled position="absolute" open={props.open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(props.open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton onClick={() => navigate(`/signin`)} color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBarStyled>
  );
}
