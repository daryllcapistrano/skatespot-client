import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

import SpotCard from "../components/SpotCard";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2.5rem 0;
  width: 400px;
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
      id: skatepark.data.data._id,
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
      id,
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
          id={id}
          name={name}
          terrain={terrain}
          location={location}
          city={city}
          state={state}
          country={country}
          rating={rating}
          image={image}
        />
      </Wrapper>
    );
  }
}

export default SkateparkDetail;
