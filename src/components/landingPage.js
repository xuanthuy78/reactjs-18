import React from "react";
import auth from './Auth';

export const LandingPage = props => {
  return (
    <div>
      <h5>Landing Page</h5>
      <button
        onClick={() => {
          auth.login(() => {
            console.log('âf',props.history )
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
