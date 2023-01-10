import { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import StyleConfigs from "../configs/StyleConfigs";
import SizeConfigs from "../configs/SizeConfigs";
import AppRoutes from "../routes/AppRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

import "./Sidebar.css";

const Sidebar = () => {
  const nodeRef = useRef(null);
  const [transition_trigger, transitionTrigger] = useState(false);

  useEffect(() => {
    transitionTrigger(true);
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: StyleConfigs.sidebar.bg,
          color: StyleConfigs.sidebar.color
        },
        fontFamily: StyleConfigs.sidebar.fontFamily,
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            {/* <Avatar src={assets.images.logo} /> */}
            Joseph Daniel Moreno
          </Stack>
        </Toolbar>
        <CSSTransition nodeRef={nodeRef} in={transition_trigger} timeout={200} classNames="sidebar-selection">
          <div ref={nodeRef}>
            {AppRoutes.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))}
          </div>
        </CSSTransition>
      </List>
    </Drawer>
  );
};

export default Sidebar;