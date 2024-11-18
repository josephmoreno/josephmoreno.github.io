import { create } from 'zustand';

const useNavbar = create((set) => {
    return {
        nav_ind: -1,
        old_ver: false,
        setNavInd: (nav_ind: number) => set(() => ({ nav_ind: nav_ind, })),
        setOldVer: (old_ver: boolean) => set(() => ({old_ver: old_ver, })),
    };
});

export default useNavbar;