import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  transition: transform 0.3s ease-in-out;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0 2rem;
    font-weight: bold;
    /* letter-spacing: 0.5rem; */
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
