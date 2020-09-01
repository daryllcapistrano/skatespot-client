import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "container py-4",
})`
  color: #ffffff;
`;

export const ContainerRow = styled.div.attrs({
  className: "row p-0 m-0",
})`
  ${"" /* height: 100vh; */}
`;

export const ContainerCol = styled.div.attrs({
  className: "col-xl-3 col-lg-4 col-md-4",
})`
  padding: 0.25em;
  max-height: 250px;
`;
