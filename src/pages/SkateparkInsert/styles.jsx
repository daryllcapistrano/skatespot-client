import styled from "styled-components";

export const Title = styled.h1.attrs({
  className: "h1",
})``;

export const PageWrapper = styled.div.attrs({
  className: "form-group mx-5 py-4",
})`
  color: #ffffff;
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
`;

export const Button = styled.button.attrs({
  className: `btn btn-primary m-1`,
})``;

export const CancelButton = styled.a.attrs({
  className: `btn btn-danger m-2`,
})``;
