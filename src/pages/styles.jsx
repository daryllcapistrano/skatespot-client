import styled from "styled-components";

// SkateparkAll Styles
export const Wrapper = styled.div.attrs({
  className: "container py-4",
})``;

export const ContainerRow = styled.div.attrs({
  className: "row ",
})``;

export const ContainerCol = styled.div.attrs({
  className: "col-lg-4 col-md-6",
})`
  padding: 0.25em;
`;

// SkateparkDetail Styles
export const DetailWrapper = styled.div.attrs({
  className: "m-auto py-4",
})``;

// SkateparkInsert & SkateparkUpdate Styles
export const Title = styled.h1.attrs({
  className: "h1",
})``;

export const PageWrapper = styled.div.attrs({
  className: "form-group mx-3 py-4",
})`
  color: #ffffff;
`;

export const Label = styled.label.attrs({
  className: "m-0",
})``;

export const InputText = styled.input.attrs({
  className: "form-control m-0",
})``;

export const Button = styled.button.attrs({
  className: `btn btn-primary m-0`,
})``;

export const CancelButton = styled.a.attrs({
  className: `btn btn-danger m-2`,
})``;
