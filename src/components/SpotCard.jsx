import React from "react";
import styled from "styled-components";

import { UpdateSkatepark, DeleteSkatepark } from "../components/UserActions";

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
})`
  border: 0;
  padding: 0;
`;

function SpotCard(props) {
  return (
    <>
      <Card>
        <CardImage src={props.image} alt="skatepark" />
        <CardBody>
          <ListGroup>
            <ListItem>
              <h1>{props.name}</h1>
            </ListItem>
            <ListItem>terrain: {props.terrain}</ListItem>
            <ListItem>
              location: {props.location}
              <br />
              {props.city}, {props.state}
              <br />
              {props.country}
            </ListItem>
            <ListItem>rating: {props.rating}</ListItem>
            <ListItem>
              <UpdateSkatepark id={props.id} />
              <DeleteSkatepark id={props.id} />
            </ListItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}

export default SpotCard;
