import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MemoryIcon from "@mui/icons-material/Memory";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const drawerWidth = 240;

export default function Sidebar(props) {
  let navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <h3
          style={{
            flexGrow: "1",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          JenPlane
        </h3>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Fragment>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("dashboard/organizations")}>
            <ListItemIcon>
              <CorporateFareIcon />
            </ListItemIcon>
            <ListItemText primary="Organizations" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("dashboard/processes")}>
            <ListItemIcon>
              <MemoryIcon />
            </ListItemIcon>
            <ListItemText primary="Processes" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("dashboard/projects")}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("dashboard/users")}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </Fragment>
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
}
