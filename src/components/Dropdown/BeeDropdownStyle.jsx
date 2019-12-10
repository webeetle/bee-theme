import {
  info,
  success,
  danger,
  dark,
  warning,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  darkBoxShadow
} from "../main-theme";
import { hexToRgba } from './../styles/utils';


const DropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  dropdown: {
    borderRadius: theme.shape.borderRadius,
    border: "0",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  pooperResponsive: {
    zIndex: "1200",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap"
  },
  primaryHover: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: `0 12px 20px -10px ${hexToRgba(theme.palette.primary.main, .28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(theme.palette.primary.main, .2)}`
    }
  },
  secondaryHover: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      boxShadow: `0 12px 20px -10px ${hexToRgba(theme.palette.secondary.main, .28)}, 0 4px 20px 0px rgba(0, 0, 0, .12), 0 7px 8px -5px ${hexToRgba(theme.palette.secondary.main, .2)}`
    }
  },
  infoHover: {
    "&:hover": {
      backgroundColor: info.main,
      color: info.textContrast,
      ...infoBoxShadow
    }
  },
  successHover: {
    "&:hover": {
      backgroundColor: success.main,
      color: success.textContrast,
      ...successBoxShadow
    }
  },
  warningHover: {
    "&:hover": {
      backgroundColor: warning.main,
      color: warning.textContrast,
      ...warningBoxShadow
    }
  },
  dangerHover: {
    "&:hover": {
      backgroundColor: danger.main,
      color: danger.textContrast,
      ...dangerBoxShadow
    }
  },
  darkHover: {
    "&:hover": {
      backgroundColor: dark.main,
      color: dark.textContrast,
      ...darkBoxShadow
    }
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(0, 0, 0, .12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: ".1875rem 1.25rem",
    fontSize: ".75rem",
    lineHeight: "1.428571",
    color: "#777",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

export default DropdownStyle;
