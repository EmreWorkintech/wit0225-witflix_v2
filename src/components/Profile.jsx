import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const ProfileItem = styled.div`
  cursor: pointer;
  &:hover img {
    border: 2px solid white;
  }
  &:hover p {
    font-weight: bold;
    color: white;
  }
`;

const Avatar = styled.img`
  border-radius: 0.6rem;
  margin: auto;
  display: block;
  border: 2px solid rgba(0, 0, 0, 0);
`;

function Profile(props) {
  const { profil, setActiveProfile } = props;
  const history = useHistory();

  function handleSelect() {
    setActiveProfile(profil);
    history.push("/browse");
  }
  return (
    <ProfileItem onClick={handleSelect}>
      <Avatar src={profil.avatar} />
      <p>{profil.name}</p>
    </ProfileItem>
  );
}

export default Profile;
