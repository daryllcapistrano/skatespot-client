import styled from "styled-components";

export const Title = styled.h1.attrs({ className: "m-2" })`
  text-transform: Capitalize;
`;

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

// export const Wrapper = styled.div.attrs({
//   className: "px-3 py-4",
// })`
//   overflow: scroll;
//   height: 90vh;
//   width: 100vw;
// `;

// export const Row = styled.div.attrs({
//   className: "row p-0 m-0",
// })``;

// export const Col = styled.div.attrs({
//   className: "col-xl-3 col-lg-4 col-md-4",
// })`
//   padding: 0.25em;
// `;
