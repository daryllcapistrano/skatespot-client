import React from "react";
import styled from "styled-components";

const Card = styled.div.attrs({
  className: "card",
})`
  width: 20rem;
  display: block;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.25s;

  :hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const CardImage = styled.img.attrs({
  className: "card-img-top",
})``;

const CardBody = styled.div.attrs({
  className: "card-body",
})``;

const ListGroup = styled.ul.attrs({
  className: "list-group list-group-flush",
})``;

const ListItem = styled.li.attrs({
  className: "list-group-item",
})``;

function SpotCard(props) {
  return (
    <>
      <Card>
        <CardImage src={props.image} alt="skatepark" />
        <CardBody>
          <ListGroup>
            <ListItem>{props.terrain}</ListItem>
            <ListItem>{props.location}</ListItem>
            <ListItem>
              {props.city}, {props.state}
              <br />
              {props.country}
            </ListItem>
            <ListItem>{props.state}</ListItem>
            <ListItem>{props.country}</ListItem>
            <ListItem>{props.rating}</ListItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}

export default SpotCard;
