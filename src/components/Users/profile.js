import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    return (
      <div>
        <div style={{ textAlign: `center` }}>
          <img
            src={user.picture}
            alt={user.name}
            style={{ width: `50%`, marginBottom: `2em` }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: `1em`,
              textTransform: `uppercase`,
              margin: `.25em`,
            }}
          >
            {user.name}
          </div>
        </div>
        <div>
          <div style={{ fontSize: `.75em`, margin: `.25em` }}>{user.email}</div>
        </div>
      </div>
    );
  }
  return <div>user not logged in</div>;
};

export default Profile;
