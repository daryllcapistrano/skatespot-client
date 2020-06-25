import React, { Component } from "react";
import styled from "styled-components";
import api from "../api";

import SpotCard from "../components/SpotCard";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class SpotGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skateparks: [],
      columns: [],
      isLoading: false,
    };

    this.componentDidMount = async () => {
      this.setState({ isLoading: true });

      await api.getAllSkateparks().then((skateparks) => {
        this.setState({
          skateparks: skateparks.data.data,
          isLoading: false,
        });
      });
    };
  }

  render() {
    const { skateparks } = this.state;
    console.log(skateparks);

    return (
      <React.Fragment>
        <Wrapper>
          {this.state.skateparks.map((skatepark, index) => (
            <SpotCard
              key={index}
              id={skatepark._id}
              image={skatepark.image}
              name={skatepark.name}
              terrain={skatepark.terrain}
              location={skatepark.location}
              city={skatepark.city}
              state={skatepark.state}
              country={skatepark.country}
              rating={skatepark.rating}
            />
          ))}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default SpotGrid;
