import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "px-3 py-4",
})`
  overflow: scroll;
  height: 90vh;
`;

export const Row = styled.div.attrs({
  className: "row p-0 m-0",
})``;

export const Col = styled.div.attrs({
  className: "col-xl-3 col-lg-4 col-md-4",
})`
  padding: 0.25em;
`;
