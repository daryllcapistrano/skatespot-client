import React, { Component } from "react";
import api from "../api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconContext } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

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

    const ToastMessage = () => (
      <IconContext.Provider
        value={{
          color: "white",
          size: "3rem",
          // className: "global-class-name",
        }}
      >
        <FaRegCheckCircle />
        <span style={{ padding: `0 2.5rem` }}>Skatepark Created</span>
      </IconContext.Provider>
    );

    const notifySuccess = () =>
      toast.success(
        <ToastMessage />,
        { onClose: () => (window.location.href = "/skateparks/list") },
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

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
      notifySuccess();
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
      <Wrapper>
        <Title>Add Skatepark</Title>

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

        <Button onClick={this.handleIncludeSkatepark}>Add Skatepark</Button>
        <CancelButton href={"/skateparks/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default SkateparkInsert;
