import React from "react";
import Rating from "../Rating/Rating";

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
          <div
            style={{ textAlign: `center`, position: `absolute`, width: `100%` }}
          >
            <h5 style={{ margin: `.5em`, color: `#ffffff` }}>{props.name}</h5>
            <Rating rating={props.rating} />
            <h6 style={{ color: `#ffffff` }}>{props.location}</h6>
          </div>
          <CardImage src={props.image} alt="skatepark" />
        </SkateparkDetail>
      </Card>
    </>
  );
}

export default Thumbnail;
