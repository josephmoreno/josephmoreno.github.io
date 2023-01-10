import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import StyleConfigs from "../../configs/StyleConfigs";
import SizeConfigs from "../../configs/SizeConfigs";
import Sidebar from "../Sidebar";

const DefaultLayout = () => {
    return (
        <Box sx={{ display: "flex" }}>
          <Box
            component="nav"
            sx={{
              width: SizeConfigs.sidebar.width,
              flexShrink: 0
            }}
          >
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: `calc(100% - ${SizeConfigs.sidebar.width})`,
              minHeight: "100vh",
              backgroundColor: StyleConfigs.mainBg,
              // backgroundImage: StyleConfigs.bgImage,
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
            }}
          >
            {/* <Toolbar /> */}
            <Outlet />
          </Box>
        </Box>
    );
};

export default DefaultLayout;