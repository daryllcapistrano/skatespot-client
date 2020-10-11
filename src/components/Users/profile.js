import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    return (
      <div style={{ textAlign: `center` }}>
        <img src={user.picture} alt={user.name} style={{ width: `50%` }} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
  return <div>user not logged in</div>;
};

export default Profile;
