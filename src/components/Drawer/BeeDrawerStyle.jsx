import {
  danger, dark, info, success, warning
} from "../main-theme";

const DrawerStyle = theme => ({
  drawer: {
    boxSizing:'border-box',
    "& .MuiDrawer-paper": {
      flexShrink: 0
    }
  },
  primary: {
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    "& .MuiSvgIcon-root":{
      color: theme.palette.primary.contrastText
    }
  },
  secondary: {
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    "& .MuiSvgIcon-root":{
      color: theme.palette.secondary.contrastText
    }
  },
  gradient1: {
    "& .MuiDrawer-paper": {
      backgroundImage: "linear-gradient(#FF5858, #F09819)",
      color: theme.palette.secondary.contrastText
    },
    "& .MuiSvgIcon-root":{
      color: theme.palette.secondary.contrastText
    }
  },
  gradient2: {
    "& .MuiDrawer-paper": {
      backgroundImage: "linear-gradient(#9438FB, #11ACD6)",
      color: theme.palette.secondary.contrastText
    },
    "& .MuiSvgIcon-root":{
      color: theme.palette.secondary.contrastText
    }
  },
  info: {
    "& .MuiDrawer-paper": {
      backgroundColor: info.main,
      color: info.textContrast
    },
    "& .MuiSvgIcon-root":{
      color: info.textContrast
    }
  },
  success: {
    "& .MuiDrawer-paper": {
      backgroundColor: success.main,
      color: success.textContrast
    },
    "& .MuiSvgIcon-root":{
      color: success.textContrast
    }
  },
  warning: {
    "& .MuiDrawer-paper": {
      backgroundColor: warning.main,
      color: warning.textContrast
    },
    "& .MuiSvgIcon-root":{
      color: warning.textContrast
    }
  },
  danger: {
    "& .MuiDrawer-paper": {
      backgroundColor: danger.main,
      color: danger.textContrast
    },
    "& .MuiSvgIcon-root":{
      color: danger.textContrast
    }
  },
  dark: {
    "& .MuiDrawer-paper": {
      backgroundColor: dark.main,
      color: dark.textContrast
    },
    "& .MuiSvgIcon-root":{
      color: dark.textContrast
    }
  },

  open: {
    "& .MuiDrawer-paper": {
      width: theme.drawerWidth,
      overflowX: 'hidden',
      left:0,
      transition: theme.transitions.create(['width', 'left'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },

  collapsed: {
    "& .MuiDrawer-paper": {
      transition: theme.transitions.create(['width', 'left'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.drawerWidth,
      left: 0 - (theme.drawerWidth + 2),
      [theme.breakpoints.up('sm')]: {
        width: theme.drawerWidthCollapsed,
        left:0
      },
    }
  },

  drawerHead:{
    boxSizing:'border-box',
    padding: theme.spacing(2),
  },

  drawerBody:{
    boxSizing:'border-box',
    width: theme.drawerWidth
  }
});

export default DrawerStyle;
