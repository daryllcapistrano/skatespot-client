import React from "react";
import { IconContext } from "react-icons";
import { GiRoundStar } from "react-icons/gi";

import { RatingContainer, RatingNumber } from "./styles";

function Rating(props) {
  return (
    <>
      <RatingContainer>
        <RatingNumber>{props.rating}</RatingNumber>
        <IconContext.Provider
          value={{
            color: "#EE6021",
            size: "1.5rem",
          }}
        >
          <GiRoundStar />
        </IconContext.Provider>
      </RatingContainer>
    </>
  );
}

export default Rating;
