import { storiesOf } from "@storybook/react";

import Menu from "../Menu";

const stories = storiesOf("Menu", module);

stories.add("Menu", () => {
  return (
    <Menu />
  );
});