import styled from "styled-components";

export const PageWrapper = styled.div.attrs({
  className: "px-3 py-4",
})`
  overflow: scroll;
  height: 90vh;
  width: 100vw;
`;

export const Label = styled.label.attrs({
  className: "m-0",
})``;

export const InputText = styled.input.attrs({
  className: "form-control m-1",
})`
  border: 0;
  border-radius: 3px;
  background-color: #272d2e;
  outline: none;
`;

export const Button = styled.button.attrs({
  className: `btn btn-primary m-1`,
})``;

export const CancelButton = styled.a.attrs({
  className: `btn btn-danger m-2`,
})``;
