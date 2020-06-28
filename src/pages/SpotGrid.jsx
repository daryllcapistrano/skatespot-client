import React, { Component } from "react";
import styled from "styled-components";
import api from "../api";

import SpotCard from "../components/SpotCard";

const ContainerRow = styled.div.attrs({
  className: "row no-gutters",
})``;

const ContainerCol = styled.div.attrs({
  className: "col-sm-4",
})`
  padding: 0;
`;

class SpotGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skateparks: [],
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
        <ContainerRow>
          {this.state.skateparks.map((skatepark, index) => (
            <ContainerCol key={index}>
              <SpotCard
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
            </ContainerCol>
          ))}
        </ContainerRow>
      </React.Fragment>
    );
  }
}

export default SpotGrid;
