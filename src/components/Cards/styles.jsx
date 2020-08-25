import styled from "styled-components";

export const Card = styled.div.attrs({
  className: "card",
})`
  border: 0;
  border-radius: 0;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  @media screen and (min-width: 768px) {
    :hover {
      -webkit-transform: scale(1.01);
      transform: scale(1.01);
    }
  }
`;

export const CardImage = styled.img.attrs({
  className: "card-img-top",
})`
  height: 300px;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const CardBody = styled.div.attrs({
  className: "card-body px-3 py-1",
})``;

export const ListGroup = styled.ul.attrs({
  className: "list-group list-group-flush",
})``;

export const ListItem = styled.li.attrs({
  className: "list-group-item p-0",
})`
  border: 0;
`;

export const ListItemHeader = styled.small.attrs({
  className: "text-muted m-0 text-capitalize",
})``;

export const Text = styled.p.attrs({
  className: "font-weight-light m-0",
})``;

export const UserActions = styled.div.attrs({
  className: "text-center m-3",
})``;

export const RatingContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f90;
  ${"" /* use bootstrap classname for below */}
  margin: 0.5rem;
`;

export const RatingNumber = styled.h5`
  position: absolute;
  right: 25px;
  ${"" /* use bootstrap classname for below */}
  padding-top: 2.5px;
`;
