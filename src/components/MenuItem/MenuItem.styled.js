import styled from "styled-components";

export const StyledMenuItem = styled.li`
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  list-style-type: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: red;
  }

  div {
    position: relative;
    width: 0;
    height: 5px;
    background-color: black;
    border-color: white;
    transition: 0.5s ease-in-out;
  }

  li:hover + div {
    width: 100%;
    background-color: red;
  }

  /* li:not(:hover) + hr {
  } */
`;
