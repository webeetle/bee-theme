import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import BeeDialog from "./BeeDialog";

storiesOf("Dialog", module).add("Default", () => {
    const [opened, setOpen] = useState(true);

    return (
        <BeeDialog
            open={opened}
            title={"Title"}
            onClose={() => setOpen(false)}
        />
    );
});