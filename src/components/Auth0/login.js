import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Button
        className="btn btn-secondary btn-block btn-sm"
        // onClick={() => loginWithRedirect()}
        disabled
      >
        Log In
      </Button>
    );
  }
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
