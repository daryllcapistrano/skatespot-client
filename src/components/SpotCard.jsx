import React from "react";
import styled from "styled-components";

import {
  UpdateSkatepark,
  DeleteSkatepark,
  SkateparkDetail,
} from "../components/UserActions";

import { IconContext } from "react-icons";
import { GiRoundStar } from "react-icons/gi";

const Card = styled.div.attrs({
  className: "card",
})`
  width: 100%;
  height: 450px;
  display: block;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 0;
`;

const CardImage = styled.img.attrs({
  className: "card-img-top",
})`
  height: 200px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

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

const ListItemHeader = styled.small.attrs({
  className: "text-muted m-0 text-capitalize",
})``;

const UserActions = styled.div.attrs({
  className: "d-inline m-0 text-center",
})`
  margin: 0 auto;
  padding: 0.5rem;
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f90;
  margin: 0.5rem;
`;

const RatingNumber = styled.h5`
  position: absolute;
  right: 25px;
  padding-top: 2.5px;
`;

function SpotCard(props) {
  return (
    <>
      <Card>
        <CardImage src={props.image} alt="skatepark" />
        <RatingContainer>
          <RatingNumber>{props.rating}</RatingNumber>
          <IconContext.Provider
            value={{
              color: "#f90",
              size: "1.5rem",
            }}
          >
            <GiRoundStar />
          </IconContext.Provider>
        </RatingContainer>
        <CardBody>
          <ListGroup>
            <ListItem>
              <h3>{props.name}</h3>
            </ListItem>
            <ListItem>
              <ListItemHeader>terrain: </ListItemHeader>
              <br />
              {props.terrain}
            </ListItem>
            <ListItem>
              <ListItemHeader>location: </ListItemHeader>
              <br />
              {props.location}
              <br />
              {props.city}, {props.state}
              <br />
              {props.country}
            </ListItem>
            <UserActions>
              <UpdateSkatepark id={props.id} />
              <DeleteSkatepark id={props.id} />
              <SkateparkDetail id={props.id} />
            </UserActions>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}

export default SpotCard;
