import styled from "styled-components";
import { color } from "../../shared/styles";

export const StyledMenuItem = styled.li`
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0 2rem;
  font-weight: bold;
  color: ${color.primary2};
  text-decoration: none;
  transition: color 0.3s linear;
  list-style-type: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${color.primary1};
  }

  div {
    position: relative;
    width: 0;
    height: 5px;
    background-color: ${color.primary1};
    border-color: transparent;
    transition: 0.5s ease-in-out;
  }

  li:hover + div {
    width: 100%;
    background-color: red;
  }

  /* li:not(:hover) + hr {
  } */
`;
