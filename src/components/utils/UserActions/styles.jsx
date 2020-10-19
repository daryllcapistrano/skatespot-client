import styled from "styled-components";

// export const Update = styled.a.attrs({
//   className: "p-0",
// })`
//   color: #9999cc;
//   cursor: pointer;
//   display: inline;
//   border: 2px solid white;
// `;

export const Edit = styled.button.attrs({
  className: "btn btn-primary btn-block btn-dark p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const Delete = styled.button.attrs({
  className: "btn btn-primary btn-block btn-danger p-1 my-3",
  type: "button",
})`
  border-radius: 5px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Details = styled.a.attrs({
  className: "p-0",
})`
  color: #9999cc;
  cursor: pointer;
  display: inline;
`;
