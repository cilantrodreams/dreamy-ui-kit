import { StyledMenu } from "./Menu.styled";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  const menuItemArray = props.items.map((item) => {
    return (
      <MenuItem 
        key={item.id}
        name={item.name}
      />
    );
  });

  return (
    <StyledMenu>
      {menuItemArray}
    </StyledMenu>
  );
};

export default Menu;