import React from "react";

function Browse(props) {
  const { activeProfile } = props;

  return <div>Browse - {activeProfile.name}</div>;
}

export default Browse;
