import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainBGColor } from "../../app/GlobalStyles";

export const Nav = styled.div.attrs({
  className: "navbar navbar-expand-lg",
})`
  background-color: ${mainBGColor};
  border-bottom: 1px solid #272c2e;
  padding-bottom: 0;
  justify-content: center;
`;

export const Title = styled(Link).attrs({
  className: "navbar-brand p-0 m-0",
})`
  font-family: "Monoton", cursive;
  font-size: 3em;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Menu = styled.button.attrs({
  className: "navbar-toggler",
})``;

export const MobileMenu = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;

export const MobileWrapper = styled.div.attrs({
  className: "navbar-nav",
})`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavItem = styled.div.attrs({
  className: "nav-item",
})`
  :hover {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link).attrs({
  className: "nav-link p-1",
})`
  color: #ffffff;
  ${"" /* :hover {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
  } */}
`;

export const LinkWrapper = styled.div.attrs({})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (max-width: 991px) {
    display: none;
  }
`;
