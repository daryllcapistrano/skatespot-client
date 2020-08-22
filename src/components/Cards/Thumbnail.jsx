import React from "react";

import {
  // UpdateSkatepark,
  // DeleteSkatepark,
  SkateparkDetail,
} from "../UserActions";

import {
  Card,
  CardImage,
  // CardBody,
  // ListGroup,
  // ListItem,
  // ListItemHeader,
  // Text,
  // UserActions,
  // RatingContainer,
  // RatingNumber,
} from "./styles";

function Thumbnail(props) {
  return (
    <>
      <Card>
        <SkateparkDetail id={props.id}>
          <CardImage src={props.image} alt="skatepark" />
        </SkateparkDetail>
      </Card>
    </>
  );
}

export default Thumbnail;
