import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

import SpotCard from "../components/SpotCard";

const Wrapper = styled.div`
  margin: 0 30px;
`;

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
        <SpotCard
          name={name}
          terrain={terrain}
          location={location}
          city={city}
          state={state}
          country={country}
          rating={rating}
          image={image}
        ></SpotCard>
      </Wrapper>
    );
  }
}

export default SkateparkDetail;
