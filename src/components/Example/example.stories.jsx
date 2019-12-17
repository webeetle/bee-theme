import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import BeeDrawer from '../Drawer/BeeDrawer';
import BeeHeader from "../Header/BeeHeader";
import BeeButton from "../Button/BeeButton";
import {ListItem, ListItemIcon, ListItemText, Typography, List, Collapse} from "@material-ui/core";
import {Send as SendIcon, ExpandLess, ExpandMore, StarBorder, Drafts as  DraftsIcon, Inbox as InboxIcon} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import {drawerWidth, drawerWidthCollapsed} from "../main-theme";

export const Layout = () => {
  const [collapse, setCollapse] = useState(true);
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles(theme => ({
    layout: {
      display: "flex",
      "& .content": {
        padding: theme.spacing(3),
        marginTop: 60,
        flexGrow: 1,
      },

      "& .content, & .BeeHeader-root": {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      "& .BeeDrawer-root-collapsed ~ .content, & .BeeDrawer-root-collapsed ~ .BeeHeader-root": {
        width: '100%',
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidthCollapsed}px)`,
          marginLeft: drawerWidthCollapsed,
        }
      },
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <BeeDrawer
        open={true}
        header={
          collapse ?
              <Typography variant={"h5"} align={"center"}>W</Typography> :
              <Typography variant={"h5"} align={"center"}>Webeetle</Typography>
        }
        color={"secondary"}
        collapsed={collapse}
        anchor={"left"}
        variant={"persistent"}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={() => {setOpen(!open)}}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </BeeDrawer>

      <BeeHeader fixed={true}
                 color={"primary"}
                 brand={<Typography variant={"h5"}>Page Title</Typography>}
                 handleDrawerToggle={() => setCollapse(!collapse)}
                 rightLinks={<BeeButton size={"small"}>Other Link</BeeButton>}
      />

      <main className={"content"}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  )
}

storiesOf('Advanced Examples', Layout)
  .add('Simple Layout', Layout)
