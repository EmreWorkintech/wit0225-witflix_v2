import React from "react";
import ProfileList from "../components/ProfileList";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Welcome(props) {
  const { setActiveProfile } = props;

  return (
    <Container>
      <ProfileList setActiveProfile={setActiveProfile} />
    </Container>
  );
}

export default Welcome;
