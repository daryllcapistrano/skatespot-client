import React, { Component } from "react";
import ReactTable from "react-table-6";
import styled from "styled-components";
import api from "../api";
import {
  SkateparkDetail,
  UpdateSkatepark,
  DeleteSkatepark,
} from "../components/UserActions";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 2rem;
`;

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

    const columns = [
      // {
      //   Header: "ID",
      //   accessor: "_id",
      //   filterable: true,
      // },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      // {
      //   Header: "Terrain",
      //   accessor: "terrain",
      //   filterable: true,
      // },
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
      // {
      //   Header: "Country",
      //   accessor: "country",
      //   filterable: true,
      // },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "Image",
        accessor: "image",
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
