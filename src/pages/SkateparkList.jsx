import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
 color: #ef9b0f,
 cursor: pointer,
`;

const Delete = styled.div`
  color: #ff0000,
  cursor: pointer,
`;

class UpdateSkatepark extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/skateparks/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteSkatepark extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to delete the skatepark with id: ${this.props.id} permanently?`
      )
    ) {
      api.deleteSkateparkById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class SkateparkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skateparks: [],
      columns: [],
      isLoading: false,
    };

    this.componentDidMount = async () => {
      this.setState({ isLoading: true });

      await api.getAllSkateparks().then((skateparks) => {
        this.setState({
          skateparks: skateparks.data.data,
          isLoading: false,
        });
      });
    };
  }

  render() {
    const { skateparks, isLoading } = this.state;
    console.log("TCL: SkateparkList -> render -> skateparks", skateparks);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Terrain",
        accessor: "terrain",
        filterable: true,
      },
      {
        Header: "Location",
        accessor: "location",
        filterable: true,
      },
      {
        Header: "City",
        accessor: "city",
        filterable: true,
      },
      {
        Header: "State",
        accessor: "state",
        filterable: true,
      },
      {
        Header: "Country",
        accessor: "country",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <UpdateSkatepark id={props.original._id}></UpdateSkatepark>
            </span>
          );
        },
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteSkatepark id={props.original._id}></DeleteSkatepark>
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!skateparks.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={skateparks}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default SkateparkList;
