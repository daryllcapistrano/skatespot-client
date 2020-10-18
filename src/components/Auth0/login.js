import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  }
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
