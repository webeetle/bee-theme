import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import BeeDialog from "./BeeDialog";
import { Typography } from "@material-ui/core";

storiesOf("Dialog", module).add("Default", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Primary", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="primary"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Secondary", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="secondary"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Warning", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="warning"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Danger", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="danger"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Success", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="success"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Info", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="info"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});

storiesOf("Dialog", module).add("Dark", () => {
  const [opened, setOpen] = useState(true);

  return (
    <BeeDialog
      color="dark"
      open={opened}
      title={"Title"}
      onClose={() => setOpen(false)}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.
      </Typography>
    </BeeDialog>
  );
});