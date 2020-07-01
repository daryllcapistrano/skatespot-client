import React, { Component } from "react";
import api from "../api";
import { SpotCard } from "../components/Cards";
// Style Imports
import { Wrapper, ContainerRow, ContainerCol } from "./styles";

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
      <>
        <Wrapper>
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
        </Wrapper>
      </>
    );
  }
}

export default SpotGrid;
