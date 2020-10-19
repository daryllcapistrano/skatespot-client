import React, { Component } from "react";
import api from "../../../api";
import { notifyDeleteSuccess } from "../Notifications";
import { Edit, Delete, Details } from "./styles";

class EditSkatepark extends Component {
  updateUser = () => {
    window.location.href = `/skateparks/update/${this.props.id}`;
  };

  render() {
    return <Edit onClick={this.updateUser}>Edit</Edit>;
  }
}
class DeleteSkatepark extends Component {
  deleteUser = () => {
    if (window.confirm(`Permanently delete ${this.props.name}?`)) {
      api.deleteSkateparkById(this.props.id);
      notifyDeleteSuccess();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}
class SkateparkDetail extends Component {
  updateUser = () => {
    window.location.href = `/skateparks/details/${this.props.id}`;
  };

  render() {
    return <Details onClick={this.updateUser}>{this.props.children}</Details>;
  }
}

export { EditSkatepark, DeleteSkatepark, SkateparkDetail };
