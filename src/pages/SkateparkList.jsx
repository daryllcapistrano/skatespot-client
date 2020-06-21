import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
 color: yellow,
 cursor: pointer,
`;

const Delete = styled.div`
  color: yellow,
  cursor: pointer,
`;

const Details = styled.div`
  color: yellow,
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
              <DeleteSkatepark
                name={props.original.name}
                id={props.original._id}
              ></DeleteSkatepark>
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
              <SkateparkDetail
                name={props.original.name}
                id={props.original._id}
              ></SkateparkDetail>
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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default SkateparkList;
