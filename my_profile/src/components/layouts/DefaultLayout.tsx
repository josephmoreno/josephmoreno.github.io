import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import StyleConfigs from "../../configs/StyleConfigs";
import SizeConfigs from "../../configs/SizeConfigs";
import Sidebar from "../Sidebar";

import { CSSTransition } from "react-transition-group";
import { useRef, useState, useEffect } from "react";

import "./DefaultLayout.css";

const DefaultLayout = () => {
  const nodeRef = useRef(null);
  const [transition_trigger, transitionTrigger] = useState(false);

  useEffect(() => {
    transitionTrigger(true);
  }, []);

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
            background: StyleConfigs.bgGradient,
            // backgroundImage: StyleConfigs.bgImage,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}
        >
          {/* <Toolbar /> */}

          <CSSTransition nodeRef={nodeRef} in={transition_trigger} timeout={200} classNames="page">
            <div ref={nodeRef}>
              <Outlet />
            </div>
          </CSSTransition>
        </Box>
      </Box>
  );
};

export default DefaultLayout;