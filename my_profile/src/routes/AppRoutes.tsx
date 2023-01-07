import { RouteType0 } from "./config";

import ResumePage from "../components/pages/ResumePage";
import ProjectsPage from "../components/pages/ProjectsPage";
import TimelinePage from "../components/pages/TimelinePage";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";

const app_routes: RouteType0[] = [
    {
      index: true,
      element: <ResumePage/>,
      state: "default"
    },
    {
      path: "/resume",
      element: <ResumePage/>,
      state: "resume",
      sidebarProps: {
        displayText: "Resume",
        icon: <AccountBoxIcon/>
      },
    },
    {
      path: "/projects",
      element: <ProjectsPage/>,
      state: "projects",
      sidebarProps: {
        displayText: "Projects",
        icon: <FolderSharedIcon/>
      },
    },
    {
      path: "/timeline",
      element: <TimelinePage/>,
      state: "timeline",
      sidebarProps: {
        displayText: "Timeline",
        icon: <ViewTimelineIcon/>
      },
    },
  ];
  
  export default app_routes;