import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "col-md-12 col-lg-10",
})`
  background-color: #090e28;
  margin: 0.6em 0 0 0;
  @media (min-width: 992px) {
    border-top-left-radius: 3px;
  }
  border-top-left-radius: none;
`;
