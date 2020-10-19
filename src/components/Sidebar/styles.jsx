import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div.attrs({
  className: "col-lg-2 d-none d-lg-block p-0",
})`
  background-color: #272c2e;
  height: auto;
`;

export const LogoWrapper = styled.div`
  display flex;
  justify-content: center;
  padding: 1.25em`;

export const InnerWrapper = styled.div.attrs({ className: "py-1 px-2 m-0" })`
  height: max-content;
`;

export const Button = styled(Link).attrs({
  className: "btn btn-primary btn-block btn-dark p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
