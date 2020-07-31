import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "col-md-2 d-none d-lg-block",
})`
  height: 100vh;
  background-color: #121212;
  border-right: 1px solid #8693ab;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  padding: 15px 10px;
`;
export const ListItemText = styled.span`
  padding-left: 8px;
`;
