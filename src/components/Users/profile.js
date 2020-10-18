import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: `center`,
          marginTop: `2em`,
          paddingTop: `2em`,
          borderTop: `2px solid #1e2225`,
        }}
      >
        <p>Loading ...</p>
      </div>
    );
  }
  if (isAuthenticated) {
    return (
      <>
        <div
          style={{
            textAlign: `center`,
            marginTop: `2em`,
            paddingTop: `2em`,
            borderTop: `2px solid #1e2225`,
          }}
        >
          <img
            src={user.picture}
            alt={user.name}
            style={{ width: `50%`, borderRadius: `50%` }}
          />
          <div
            style={{
              fontSize: `1em`,
              textTransform: `uppercase`,
              margin: `.25em`,
              padding: `1em`,
            }}
          >
            {user.name}
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      style={{
        textAlign: `center`,
        marginTop: `2em`,
        paddingTop: `2em`,
        borderTop: `2px solid #1e2225`,
      }}
    >
      <p>user is not logged in</p>
    </div>
  );
};

export default Profile;
