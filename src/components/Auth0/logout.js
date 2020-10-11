import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const uri = "https://127.0.0.1:8000";

  return <button onClick={() => logout({ returnTo: uri })}>Log Out</button>;
};

export default LogoutButton;
