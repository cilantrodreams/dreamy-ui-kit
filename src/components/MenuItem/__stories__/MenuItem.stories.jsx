import { storiesOf } from "@storybook/react";

import MenuItem from "../MenuItem";

const stories = storiesOf("MenuItem", module);

stories.add("Default", () => {
  return (
    <MenuItem name="Item Name" />
  );
});