import React, { useState, useEffect } from "react";
import api from "../api";
// Style Imports
import { Wrapper } from "./styles";

const SkateparkList = () => {
  const [skateparks, setSkateparks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setSkateparks({ skateparks: skateparks.data.data, isFetching: true });
        const response = await api.getAllSkateparks();
        setSkateparks({ skateparks: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setSkateparks({ skateparks: skateparks.data.data, isFetching: false });
      }
    };
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <h1>hello</h1>
    </React.Fragment>
  );
};

export default SkateparkList;
