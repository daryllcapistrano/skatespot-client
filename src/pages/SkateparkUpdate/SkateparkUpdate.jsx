import React, { Component } from "react";
import api from "../../api";
import { notifyUpdateSuccess } from "../../components/utils/";
// Style Imports
import {
  PageWrapper,
  Label,
  InputText,
  UpdateButton,
  CancelButton,
} from "./styles";

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

    await api.updateSkateparkById(id, payload).then((res) => {
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
      notifyUpdateSuccess();
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
      image: skatepark.data.data.image,
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
      <PageWrapper>
        <div className="row" style={{ height: `100vh` }}>
          <div className="col">
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

            <Label>Image: </Label>
            <InputText
              type="text"
              value={image}
              onChange={this.handleChangeInputImage}
            />

            <UpdateButton onClick={this.handleUpdateSkatepark}>
              Update Skatepark
            </UpdateButton>
            <CancelButton href={"/"}>Cancel</CancelButton>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default SkateparkUpdate;
