import React, { Component } from "react";
import api from "../../api";

import { UpdateSkatepark, DeleteSkatepark } from "../../components/utils";
import { SpotCard } from "../../components/Cards";

import { Wrapper, Row, Col } from "../styles";

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
        <Row>
          <div className="col-md-6" style={{ padding: `.25em` }}>
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
          </div>
          <div className="col-md-6" style={{ padding: `.25em` }}>
            <UpdateSkatepark id={this.state.id} />
            <DeleteSkatepark id={this.state.id} />
          </div>
        </Row>
      </Wrapper>
    );
  }
}

export default SkateparkDetail;
