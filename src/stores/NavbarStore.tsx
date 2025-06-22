import { create } from 'zustand';

const useNavbar = create((set) => {
    return {
        nav_ind: -1,
        nav_trig: false,
        app_ver: 3,
        setNavInd: (nav_ind: number) => set(() => ({ nav_ind: nav_ind, })),
        navTrig: (nav_trig: boolean) => set(() => ({ nav_trig: nav_trig, })),
        setAppVer: (app_ver: number) => set(() => ({app_ver: app_ver, })),
    };
});

export default useNavbar;