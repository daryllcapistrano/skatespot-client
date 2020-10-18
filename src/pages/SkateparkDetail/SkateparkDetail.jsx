import React, { Component } from "react";
import api from "../../api";

import { UpdateSkatepark, DeleteSkatepark } from "../../components/utils";
import { Details } from "../../components/Cards";

import { Wrapper, Row } from "../styles";

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
    return (
      <Wrapper>
        <Row>
          <div className="col-md-12" style={{ padding: `.25em` }}>
            <Details {...this.state} />
          </div>
          <div
            className="col-md-12"
            style={{ padding: `.25em`, textAlign: `center` }}
          >
            <UpdateSkatepark {...this.state} />
            <DeleteSkatepark {...this.state} />
          </div>
        </Row>
      </Wrapper>
    );
  }
}

export default SkateparkDetail;
