import styled from "styled-components";

// SpotGrid Styles
export const Wrapper = styled.div.attrs({
  className: "container py-4",
})``;

export const ContainerRow = styled.div.attrs({
  className: "row",
})``;

export const ContainerCol = styled.div.attrs({
  className: "col-lg-4 col-md-6 py-3",
})``;

// SkateparkDetail Styles
export const DetailWrapper = styled.div.attrs({
  className: "m-auto py-4",
})`
  width: 400px;
`;

// SkateparkInsert & SkateparkUpdate Styles
export const Title = styled.h1.attrs({
  className: "h1",
})``;

export const PageWrapper = styled.div.attrs({
  className: "form-group m-auto py-4",
})`
  width: 400px;
`;

export const Label = styled.label.attrs({
  className: "m-1",
})``;

export const InputText = styled.input.attrs({
  className: "form-control m-1",
})``;

export const Button = styled.button.attrs({
  className: `btn btn-primary m-2`,
})``;

export const CancelButton = styled.a.attrs({
  className: `btn btn-danger m-2`,
})``;
