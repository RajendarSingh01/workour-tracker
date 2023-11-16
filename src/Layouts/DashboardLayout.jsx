import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
        }}
      >
        <Avatar sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }}>
          OP
        </Avatar>
        <Link to="EditProfile">
          <button style={{ marginTop: "10px" }}> Edit</button>
        </Link>
      </Box>
      <Divider />
      <List>
        <NavLink
          to="/Dashboard"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <DashboardIcon />
              <Typography style={{ margin: "10px" }}>Dashboard</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="Profile"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <AccountBoxIcon />
              <Typography style={{ margin: "10px" }}>Profile</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="StartWorkout"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <AddIcon />
              <Typography style={{ margin: "10px" }}>Start Workout</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="History"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <HistoryIcon />
              <Typography style={{ margin: "10px" }}>History</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="Exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <FitnessCenterIcon />
              <Typography style={{ margin: "10px" }}>Exercises</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="History"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          <ListItem>
            <ListItemButton>
              <LoginIcon />
              <Typography style={{ margin: "10px" }}>Log Out</Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Workout Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
