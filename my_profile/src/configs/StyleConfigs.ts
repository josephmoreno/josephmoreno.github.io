import { colors } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import bg0 from "../images/bg0.png";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  // interface Palette {
  //   neutral: Palette['primary'];
  // }

  // interface PaletteOptions {
  //   neutral: PaletteOptions['primary'];
  // }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
};

const StyleConfigs = {
  sidebar: {
    bg: "#000000",
    color: "#ffffff",
    hoverBg: "#555555",
    activeBg: "#555155",
    fontFamily: "monospace"
  },
  // mainBg: colors.grey["600"],
  mainBg: "#555155",
  bgImage: `url(${bg0})`,
  bgGradient: "linear-gradient(135deg, #555155 90%, #000000)",
  page: {
    fontFamily: "monospace",
    color: "#ffffff",
    bg: "#333333",
    cardBg: "#444444",
    margin: "0px 8px 0px 8px",
    paddingBottom: "8px",
    pageTitleFontSize: "24px",  // 24px
    headerFontSize: "16px",     // 16px
    bodyFontSize: "12px",       // 12px

    theme: createTheme({
      status: {
        danger: "#e53e3e",
      },
      palette: {
        primary: {
          main: "#aaaaaa",
          darker: "#bbbbbb",
        },
        secondary: {
          main: "#ffffff",
          darker: "#fffeee",
        },
      },
    }),
  }
};

export default StyleConfigs;