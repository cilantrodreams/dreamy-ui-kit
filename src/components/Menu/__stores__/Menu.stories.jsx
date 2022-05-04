import { storiesOf } from "@storybook/react";

import Menu from "../Menu";

const stories = storiesOf("Menu", module);

const items = [
  {
    id: 1,
    name: "Thomas",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Blog",
  },
];

stories.add("Menu", () => {
  return (
    <Menu items={items} />
  );
});