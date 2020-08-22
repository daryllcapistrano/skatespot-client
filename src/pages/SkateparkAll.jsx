import React, { Component } from "react";
import api from "../api";
import { Thumbnail } from "../components/Cards";
// Style Imports
import { Wrapper, ContainerRow, ContainerCol } from "./styles";

class SkateparkAll extends Component {
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
    return (
      <>
        <Wrapper>
          <ContainerRow>
            {this.state.skateparks.map((skatepark, index) => (
              <ContainerCol key={index}>
                <Thumbnail
                  id={skatepark._id}
                  image={skatepark.image}
                  name={skatepark.name}
                  rating={skatepark.rating}
                  location={skatepark.location}
                />
              </ContainerCol>
            ))}
          </ContainerRow>
        </Wrapper>
      </>
    );
  }
}

export default SkateparkAll;
