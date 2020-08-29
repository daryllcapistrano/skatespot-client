import React from "react";
import { IconContext } from "react-icons";
import { FcLike } from "react-icons/fc";

import { RatingContainer, RatingNumber } from "./styles";

function Rating(props) {
  return (
    <>
      <RatingContainer>
        <RatingNumber>{props.rating}</RatingNumber>
        <IconContext.Provider
          value={{
            color: "#EE6021",
            size: "1rem",
          }}
        >
          <span>
            <FcLike />
          </span>
        </IconContext.Provider>
      </RatingContainer>
    </>
  );
}

export default Rating;
