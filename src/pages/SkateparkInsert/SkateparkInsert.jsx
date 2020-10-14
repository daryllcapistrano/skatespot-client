import React, { Component } from "react";
import api from "../../api";
import { notifyCreateSuccess } from "../../components/utils/";
// Style Imports
import {
  Title,
  // PageWrapper,
  // Label,
  InputText,
  Button,
  CancelButton,
} from "./styles";

import { Wrapper, Row } from "../styles";

class SkateparkInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputTerrain = async (event) => {
    const terrain = event.target.value;
    this.setState({ terrain });
  };

  handleChangeInputLocation = async (event) => {
    const location = event.target.value;
    this.setState({ location });
  };

  handleChangeInputCity = async (event) => {
    const city = event.target.value;
    this.setState({ city });
  };

  handleChangeInputState = async (event) => {
    const state = event.target.value;
    this.setState({ state });
  };

  handleChangeInputCountry = async (event) => {
    const country = event.target.value;
    this.setState({ country });
  };

  handleChangeInputRating = async (event) => {
    const rating = event.target.validity.valid
      ? event.target.value
      : this.state.rating;

    this.setState({ rating });
  };

  handleChangeInputImage = async (event) => {
    const image = event.target.value;
    this.setState({ image });
  };

  handleIncludeSkatepark = async () => {
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

    const payload = {
      name,
      terrain,
      location,
      city,
      state,
      country,
      rating,
      image,
    };

    await api.insertSkatepark(payload).then((res) => {
      this.setState({
        name: "",
        terrain: [],
        location: "",
        city: "",
        state: "",
        country: "",
        rating: "",
        image: "",
      });
      notifyCreateSuccess();
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
      <Wrapper style={{ width: `80vw` }}>
        {/* fix width styling above to fit container */}
        <Row>
          <div className="col-lg-6">
            {/* <PageWrapper> */}
            <Title>save a new spot</Title>
            <InputText
              type="text"
              value={name}
              placeholder="Spot Name"
              onChange={this.handleChangeInputName}
            />

            <InputText
              type="text"
              value={terrain}
              placeholder="Terrain Type"
              onChange={this.handleChangeInputTerrain}
            />

            <InputText
              type="text"
              value={location}
              placeholder="Location"
              onChange={this.handleChangeInputLocation}
            />

            <InputText
              type="text"
              value={city}
              placeholder="City"
              onChange={this.handleChangeInputCity}
            />

            <InputText
              type="text"
              value={state}
              placeholder="State"
              onChange={this.handleChangeInputState}
            />

            <InputText
              type="text"
              value={country}
              placeholder="Country"
              onChange={this.handleChangeInputCountry}
            />

            <InputText
              type="number"
              step="1"
              lang="en-US"
              min="0"
              max="10"
              pattern="[1-9]|10"
              value={rating}
              placeholder="Rating 0-10"
              onChange={this.handleChangeInputRating}
            />

            <InputText
              type="text"
              value={image}
              placeholder="Add An Image"
              onChange={this.handleChangeInputImage}
            />

            <Button onClick={this.handleIncludeSkatepark}>Add Skatepark</Button>
            <CancelButton href={"/"}>Cancel</CancelButton>
            {/* </PageWrapper> */}
          </div>
          <div className="col-lg-6">
            <p>Add SVG Animation</p>
          </div>
        </Row>
      </Wrapper>
    );
  }
}

export default SkateparkInsert;
