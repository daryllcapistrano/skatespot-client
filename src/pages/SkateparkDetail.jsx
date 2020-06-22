import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div`
  margin: 0 30px;
`;

const NameField = styled.p.attrs({
  className: "text-primary font-weight-bold",
})``;

class SkateparkDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      terrain: [],
      location: "",
      city: "",
      state: "",
      country: "",
      rating: "",
      image: "",
    };
  }

  componentDidMount = async () => {
    const { id } = this.state;
    const skatepark = await api.getSkateparkById(id);

    this.setState({
      name: skatepark.data.data.name,
      terrain: skatepark.data.data.terrain,
      location: skatepark.data.data.location,
      city: skatepark.data.data.city,
      state: skatepark.data.data.state,
      country: skatepark.data.data.country,
      rating: skatepark.data.data.rating,
      image: skatepark.data.data.image,
    });
  };

  render() {
    const {
      name,
      terrain,
      location,
      city,
      state,
      country,
      rating,
      image,
    } = this.state;

    return (
      <Wrapper>
        <Title>{name} Skatepark Details</Title>
        <NameField>{name}</NameField>
        <h1>{terrain}</h1>
        <h1>{location}</h1>
        <h1>{city}</h1>
        <h1>{state}</h1>
        <h1>{country}</h1>
        <h1>{rating}</h1>
        <img src={image} alt="park"></img>
      </Wrapper>
    );
  }
}

export default SkateparkDetail;
