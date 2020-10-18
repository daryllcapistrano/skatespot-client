import React from "react";
// import Rating from "../Rating";

function Details(props) {
  return (
    <>
      <img src={props.image} alt={props.name} style={{ width: `100%` }} />
      <div style={{ padding: `1em` }}>
        <h2>{props.name}</h2>
        <p>{props.location}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
      </div>
    </>
  );
}

export default Details;
