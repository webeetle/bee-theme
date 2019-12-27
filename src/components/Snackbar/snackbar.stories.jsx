import React from "react";
import { storiesOf } from "@storybook/react";
import BeeSnackbar from "./BeeSnackbar";

storiesOf("Snackbar", module).add("Success", () => {
  return (
    <BeeSnackbar
      variant={"success"}
      message={"Operation completed"}
      onClose={_ => alert("onCloseFunction")}
    />
  );
});

storiesOf("Snackbar", module).add("Info", () => {
  return (
    <BeeSnackbar
      variant={"info"}
      message={"Info Message"}
    />
  );
});

storiesOf("Snackbar", module).add("Warning", () => {
  return (
    <BeeSnackbar
      variant={"warning"}
      message={"Warning Message"}
    />
  );
});

storiesOf("Snackbar", module).add("Error", () => {
  return (
    <BeeSnackbar
      variant={"error"}
      message={"Error Message"}
    />
  );
});
