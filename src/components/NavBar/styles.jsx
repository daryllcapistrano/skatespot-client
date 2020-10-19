import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div.attrs({
  className: "navbar navbar-expand-lg",
})`
  background-color: #1e2225;
  border-bottom: 2px solid #272c2e;
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
  className: "btn btn-primary btn-block btn-dark p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const MobileWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
