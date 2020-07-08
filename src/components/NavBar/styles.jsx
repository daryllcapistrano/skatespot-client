import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

export const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg px-3",
})`
  justify-content: space-between;
`;

export const TitleLink = styled(Link).attrs({
  className: "navbar-brand m-2 p-0",
})`
  color: #ffffff;
  max-width: 100%;
  :hover {
    color: #ffcc66;
  }
`;

export const HamburgerButton = styled.button.attrs({
  className: "navbar-toggler pr-0",
})``;

export const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
})`
  transition: none !important;
`;

export const NavList = styled.ul.attrs({
  className: "navbar-nav my-2 my-lg-0",
})``;

export const NavItem = styled.li.attrs({
  className: "nav-item",
})``;

export const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  color: #ffffff;
  :hover {
    color: #ffcc66;
  }
`;
