import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class SkateparkUpdate extends Component {
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
      // time: "",
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

  // handleChangeInputTime = async (event) => {
  //   const time = event.target.value;
  //   this.setState({ time });
  // };

  handleUpdateSkatepark = async () => {
    const {
      id,
      name,
      terrain,
      location,
      city,
      state,
      country,
      rating,
      // time,
    } = this.state;

    // const arrayTime = time.split("/");

    const payload = {
      name,
      terrain,
      location,
      city,
      state,
      country,
      rating,
      // time: arrayTime,
    };

    await api.updateSkateparkById(id, payload).then((res) => {
      window.alert(`Skatepark updated successfully`);
      this.setState({
        name: "",
        terrain: [],
        location: "",
        city: "",
        state: "",
        country: "",
        rating: "",
        // time: "",
      });
      window.location.href = `/skateparks/list`;
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const skatepark = await api.getSkateparkById(id);

    this.setState({
      name: skatepark.data.data.name,
      terrain: skatepark.data.data.terrain,
      location: skatepark.data.data.location,
      city: skatepark.data.data.city,
      state: skatepark.data.data.state,
      country: skatepark.data.data.country,
      rating: skatepark.data.data.rating,
      // time: skatepark.data.data.time,
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
      // time,
    } = this.state;

    return (
      <Wrapper>
        <Title>Update Skatepark</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Terrain: </Label>
        <InputText
          type="text"
          value={terrain}
          onChange={this.handleChangeInputTerrain}
        />

        <Label>Location: </Label>
        <InputText
          type="text"
          value={location}
          onChange={this.handleChangeInputLocation}
        />

        <Label>City: </Label>
        <InputText
          type="text"
          value={city}
          onChange={this.handleChangeInputCity}
        />

        <Label>State: </Label>
        <InputText
          type="text"
          value={state}
          onChange={this.handleChangeInputState}
        />

        <Label>Country: </Label>
        <InputText
          type="text"
          value={country}
          onChange={this.handleChangeInputCountry}
        />

        <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={rating}
          onChange={this.handleChangeInputRating}
        />

        {/* <Label>Time: </Label>
        <InputText
          type="text"
          value={time}
          onChange={this.handleChangeInputTime}
        /> */}

        <Button onClick={this.handleUpdateSkatepark}>Update Skatepark</Button>
        <CancelButton href={"/skateparks/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default SkateparkUpdate;
