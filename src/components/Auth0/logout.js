import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const uri = "https://127.0.0.1:8000";

  return <Button onClick={() => logout({ returnTo: uri })}>Log Out</Button>;
};

export default LogoutButton;
