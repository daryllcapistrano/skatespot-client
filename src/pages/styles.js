import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "px-3 py-4",
})`
  overflow: scroll;
  height: 90vh;
  @media (max-width: 480px) {
    height: 80vh;
  }
`;

export const Row = styled.div.attrs({
  className: "row m-0",
})``;

export const Col = styled.div.attrs({
  className: "col-md-4 col-lg-4 col-xl-3",
})`
  padding: 0.25em;
`;
