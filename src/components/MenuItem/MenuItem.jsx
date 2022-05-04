import { StyledMenuItem } from "./MenuItem.styled";

const MenuItem = (props) => {
  return (
    <StyledMenuItem>
      <li>{props.name}</li>
      <div />
    </StyledMenuItem>
  )
}

export default MenuItem;