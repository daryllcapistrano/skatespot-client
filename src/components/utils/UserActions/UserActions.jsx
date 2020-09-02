import React, { Component } from "react";
import api from "../../../api";
import { notifyDeleteSuccess } from "../Notifications";
import { Update, Delete, Details } from "./styles";

class UpdateSkatepark extends Component {
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/skateparks/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}
class SkateparkDetail extends Component {
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/skateparks/details/${this.props.id}`;
  };

  render() {
    return <Details onClick={this.updateUser}>{this.props.children}</Details>;
  }
}

class DeleteSkatepark extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to permanently delete the skatepark: ${this.props.name}?`
      )
    ) {
      api.deleteSkateparkById(this.props.id);
      notifyDeleteSuccess();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

export { UpdateSkatepark, DeleteSkatepark, SkateparkDetail };
