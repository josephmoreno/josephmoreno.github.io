import { ReactNode } from "react";

export type RouteType0 = {
    element: ReactNode,
    state: string,
    index?: boolean,
    path?: string,
    child?: RouteType0[],
    sidebarProps?: {
        displayText: string,
        icon?: ReactNode;
    };
};