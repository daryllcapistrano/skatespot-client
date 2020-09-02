import React, { Component } from "react";
import api from "../../api";
import { Thumbnail } from "../../components/Cards";
import { Wrapper, Row, Col } from "./styles";

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
          <Row>
            {this.state.skateparks.map((skatepark, index) => (
              <Col key={index}>
                <Thumbnail
                  id={skatepark._id}
                  image={skatepark.image}
                  name={skatepark.name}
                  rating={skatepark.rating}
                  city={skatepark.city}
                  state={skatepark.state}
                  location={skatepark.location}
                />
              </Col>
            ))}
          </Row>
        </Wrapper>
      </>
    );
  }
}

export default SkateparkAll;
