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

export const BurgerButton = styled.button.attrs({
  className: "navbar-toggler",
  type: "button",
})``;

export const MobileMenu = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;

export const Button = styled(Link).attrs({
  className: "btn btn-primary btn-block p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  background-color: #404549;
  border-color: #404549;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const MobileWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
