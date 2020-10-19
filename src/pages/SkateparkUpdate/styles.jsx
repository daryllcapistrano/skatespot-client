import styled from "styled-components";

export const PageWrapper = styled.div.attrs({
  className: "px-3 py-4",
})`
  overflow: scroll;
  height: 90vh;
`;

export const Label = styled.label.attrs({
  className: "m-0",
})``;

export const InputText = styled.input.attrs({
  className: "form-control",
})`
  border: 0;
  border-radius: 3px;
  background-color: #272d2e;
  outline: none;
`;

export const UpdateButton = styled.button.attrs({
  className: "btn btn-primary btn-block btn-dark p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  background-color: #404549;
  border-color: #404549;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const CancelButton = styled.a.attrs({
  className: "btn btn-primary btn-block btn-danger p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
