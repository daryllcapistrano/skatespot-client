import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.a.attrs({
  className: "navbar-brand m-0 p-0",
})``;

export const LogoWrapper = styled.a.attrs({
  className: "",
})``;

export const Nav = styled.div.attrs({
  className: "navbar navbar-expand-lg px-3",
})`
  background-color: #1e2225;
  border-bottom: 3px solid #272c2e;
`;

export const TitleLink = styled(Link).attrs({
  className: "navbar-brand m-2 p-0",
})`
  font-family: "Monoton", cursive;
  font-size: 2rem;
  color: #ffffff;
  :hover {
    color: #8693ab;
  }
`;

export const HamburgerButton = styled.button.attrs({
  className: "navbar-toggler",
})``;

export const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;

export const NavList = styled.div.attrs({
  className: "navbar-nav",
})``;

export const NavItem = styled.div.attrs({
  className: "nav-item",
})`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  color: #8693ab;
  :hover {
    color: #8693ab;
  }
`;
