import React from "react";
import { IconContext } from "react-icons";
import { GiRoundStar } from "react-icons/gi";

import {
  UpdateSkatepark,
  DeleteSkatepark,
  // SkateparkDetail,
} from "../UserActions";

import {
  Card,
  CardImage,
  CardBody,
  ListGroup,
  ListItem,
  ListItemHeader,
  Text,
  UserActions,
  RatingContainer,
  RatingNumber,
} from "./styles";

function SpotCard(props) {
  return (
    <>
      <Card>
        <CardImage src={props.image} alt="skatepark" />
        {/* <RatingContainer>
          <RatingNumber>{props.rating}</RatingNumber>
          <IconContext.Provider
            value={{
              color: "#f90",
              size: "1.5rem",
            }}
          >
            <GiRoundStar />
          </IconContext.Provider>
        </RatingContainer> */}
        <CardBody>
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
          <ListGroup>
            <ListItem>
              <div>
                <h3>{props.name}</h3>
              </div>
              <div>
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
              </div>
            </ListItem>
            <ListItem>
              <ListItemHeader>terrain: </ListItemHeader>
              <Text>{props.terrain}</Text>
            </ListItem>
            <ListItem>
              <ListItemHeader>location: </ListItemHeader>
              <Text>{props.location}</Text>
              <Text>
                {props.city}, {props.state}
              </Text>
              <Text>{props.country}</Text>
            </ListItem>
          </ListGroup>
          <UserActions>
            <UpdateSkatepark id={props.id} />
            <DeleteSkatepark id={props.id} />
            {/* <SkateparkDetail id={props.id} /> */}
          </UserActions>
        </CardBody>
      </Card>
    </>
  );
}

export default SpotCard;
