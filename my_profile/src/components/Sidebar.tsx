import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import StyleConfigs from "../configs/StyleConfigs";
import SizeConfigs from "../configs/SizeConfigs";
import AppRoutes from "../routes/AppRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
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
        fontFamily: StyleConfigs.sidebar.fontFamily
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
          </Stack>
        </Toolbar>
        {AppRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;