import React, { Component } from "react";
import api from "../api";

// import { DetailWrapper } from "./styles";

import { SpotCard } from "../components/Cards";

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
      // <DetailWrapper>
      //   <SpotCard
      //     id={id}
      //     name={name}
      //     terrain={terrain}
      //     location={location}
      //     city={city}
      //     state={state}
      //     country={country}
      //     rating={rating}
      //     image={image}
      //   />

      // </DetailWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col">
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
          <div className="col">
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
        </div>
      </div>
    );
  }
}

export default SkateparkDetail;
