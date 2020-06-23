import React from "react";

function SpotCard(props) {
  return (
    <>
      <h1>name: {props.name}</h1>
      <img src={props.image} alt="park" />
      <h1>terrain: {props.terrain}</h1>
      <h1>location: {props.location}</h1>
      <h1>city: {props.city}</h1>
      <h1>state: {props.state}</h1>
      <h1>country: {props.country}</h1>
      <h1>rating: {props.city}</h1>
    </>
  );
}

export default SpotCard;
