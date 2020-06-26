import React, { Component } from "react";
import styled from "styled-components";
import api from "../api";

import SpotCard from "../components/SpotCard";

const Wrapper = styled.div.attrs({ className: "container-fluid" })`
  padding: 0;
`;

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
          <ContainerRow>
            {this.state.skateparks.map((skatepark, index) => (
              <ContainerCol>
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
              </ContainerCol>
            ))}
          </ContainerRow>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default SpotGrid;
