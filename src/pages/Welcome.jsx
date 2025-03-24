import React from "react";
import ProfileList from "../components/ProfileList";

function Welcome(props) {
  const { setActiveProfile } = props;

  return (
    <div>
      <ProfileList setActiveProfile={setActiveProfile} />
    </div>
  );
}

export default Welcome;
