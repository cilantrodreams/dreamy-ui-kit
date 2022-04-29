import styled from "styled-components";
import { color } from "../../shared/styles";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${color.primaryDark};
  }
`;
