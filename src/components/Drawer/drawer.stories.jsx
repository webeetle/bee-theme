import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import BeeDrawer from './BeeDrawer';
import BeeButton from "../Button/BeeButton";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {MoveToInbox} from "@material-ui/icons";


export const Standard = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <BeeButton color={"primary"} variant={"contained"} onClick={() => setOpen(true)}>Open Drawer</BeeButton>
      <BeeDrawer open={open} onClose={() => setOpen(false)}>
        <ListItem button>
          <ListItemIcon><MoveToInbox/></ListItemIcon>
          <ListItemText primary={"Text Button"}/>
        </ListItem>
      </BeeDrawer>
    </React.Fragment>
  )
}

export const Persistent = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <React.Fragment>
      <BeeDrawer open={true} collapsed={collapse} anchor={"left"} variant={"persistent"}>
        <ListItem button>
          <ListItemIcon><MoveToInbox/></ListItemIcon>
          <ListItemText primary={"Text Button"}/>
        </ListItem>
      </BeeDrawer>

      <BeeButton color={"primary"} variant={"contained"} onClick={() => setCollapse(!collapse)}>Toggle Drawer</BeeButton>

    </React.Fragment>
  )
}

storiesOf('Drawer', Standard)
  .add('Standard', Standard)
  .add('Persistent', Persistent)
