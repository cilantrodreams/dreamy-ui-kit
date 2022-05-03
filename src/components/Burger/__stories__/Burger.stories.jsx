import { storiesOf } from "@storybook/react";

import Burger from "../Burger";

const stories = storiesOf("Burger", module);

stories.add("Burger", () => {
  return (
    <Burger />
  );
});