import styled from "styled-components";

export const Button = styled.button.attrs({
  className: "btn btn-primary btn-block btn-dark p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
