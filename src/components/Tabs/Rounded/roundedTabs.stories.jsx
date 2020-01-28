import React from "react"
import { storiesOf } from "@storybook/react"
import BeeRoundedTabs from "./BeeRoundedTabs"
import BeeRoundedTab from "./BeeRoundedTab"
import BeePaper from "../../Paper/BeePaper"
import { Typography } from "@material-ui/core"

storiesOf("Tabs", module).add("Rounded", () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <BeeRoundedTabs value={value} onChange={handleChange}>
        <BeeRoundedTab label="TAB 1" />
        <BeeRoundedTab label="TAB 2" />
        <BeeRoundedTab label="TAB 3" />
      </BeeRoundedTabs>
      <BeePaper>
        <Typography>
          This is tab {value + 1}
        </Typography>
      </BeePaper>
    </React.Fragment>
  )
})