import React, { Component } from "react";
import styled from "styled-components";
import api from "../../api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IconContext } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

const Update = styled.div`
  color: #9999cc;
  cursor: pointer;
  display: inline;
  padding: 0.5rem;
`;

const Delete = styled.div`
  color: #9999cc;
  cursor: pointer;
  display: inline;
  padding: 0.5rem;
`;

const Details = styled.div`
  color: #9999cc;
  cursor: pointer;
  display: inline;
  padding: 0.5rem;
`;

const ToastMessage = () => (
  <IconContext.Provider
    value={{
      color: "white",
      size: "3rem",
      // className: "global-class-name",
    }}
  >
    <FaRegCheckCircle />
    <span style={{ padding: `0 2.5rem` }}>Skatepark Deleted</span>
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
    return <Details onClick={this.updateUser}>Details</Details>;
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
      notifySuccess();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

export { UpdateSkatepark, DeleteSkatepark, SkateparkDetail };
