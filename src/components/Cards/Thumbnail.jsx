import React from "react";
import Rating from "../Rating";

import {
  // UpdateSkatepark,
  // DeleteSkatepark,
  SkateparkDetail,
} from "../UserActions";

import {
  Card,
  CardImage,
  CardBody,
  // ListGroup,
  // ListItem,
  // ListItemHeader,
  // Text,
  // UserActions,
} from "./styles";

function Thumbnail(props) {
  return (
    <>
      <Card>
        <SkateparkDetail id={props.id}>
          <CardImage src={props.image} alt="skatepark" />
          <CardBody>
            <div style={{ display: `flex`, justifyContent: `space-between` }}>
              <h5 class="card-title mb-2">{props.name}</h5>
              <Rating rating={props.rating} />
            </div>

            <p class="card-text mx-0 mb-1">
              <small class="text-muted">{props.location}</small>
            </p>
            <h6 class="card-subtitle mb-2 text-muted">
              {props.city}, {props.state}
            </h6>
          </CardBody>
        </SkateparkDetail>
      </Card>
    </>
  );
}

export default Thumbnail;
