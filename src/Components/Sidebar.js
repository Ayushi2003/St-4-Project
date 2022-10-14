import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Box, Typography, Divider } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueueIcon from "@mui/icons-material/Queue";
import HomeIcon from "@mui/icons-material/Home";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "../Styles/sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <Drawer PaperProps={{sx: { width: "200px" },}} anchor="left" variant="permanent" className="sidebar">
        <Box p={2} role="presentation" className="side-head">
          <Typography variant="h6" component="div">
          <img style={{ width: 200, height: 80, cursor:"pointer", margin: 0}} src={require('./logo192.png')} alt="MyWorld" />
          </Typography>
        </Box>
        <Divider />
        <List style={{background:"#ffffff", color:"black"}}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={() => navigate("/allstudent")}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="All Student" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/addstudent")}>
            <ListItemIcon>
              <QueueIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/contact")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Contact-Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
