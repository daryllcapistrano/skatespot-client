import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
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
