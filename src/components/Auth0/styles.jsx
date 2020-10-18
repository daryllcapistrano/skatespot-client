import styled from "styled-components";

export const Button = styled.button.attrs({
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
