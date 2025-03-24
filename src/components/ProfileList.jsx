import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { profile_data } from "../data";
import styled from "styled-components";
import axios from "axios";

const Heading = styled.h1``;
const ProfileSection = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  border: 1px solid gray;
  padding: 0.5rem 2rem;
  color: gray;
`;

function ProfileList(props) {
  const [profiles, setProfiles] = useState([]);
  const { setActiveProfile } = props;

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response.data.data);
        setProfiles(profile_data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Heading>Who's Watching</Heading>
      <ProfileSection>
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            profil={profile}
            setActiveProfile={setActiveProfile}
          />
        ))}
      </ProfileSection>
      <Button>Manage Profiles</Button>
    </div>
  );
}

export default ProfileList;
