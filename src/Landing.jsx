// React:
import React from "react";
// Styled:
import { Flex, P, H1 } from "./common.style";
import { LandingWrap, Img, ImgWrap, TeamMember } from "./landing.style";

const team = [
  {
    firstName: "Jack",
    lastName: "Brown",
    occupation: "CEO",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et libero ac enim accumsan fermentum a et sem.",
    bgColor: "834c1f",
  },
  {
    firstName: "Julia",
    lastName: "Rossi",
    occupation: "CTO",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et libero ac enim accumsan fermentum a et sem.",
    bgColor: "6dee45",
  },
  {
    firstName: "Hiroko",
    lastName: "Watanabe",
    occupation: "CFO",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et libero ac enim accumsan fermentum a et sem.",
    bgColor: "0b0f09",
  },
];

const getTeam = (team) => {
  return team.map((i) => {
    return (
      <TeamMember>
        <ImgWrap>
          <Img
            src={`https://eu.ui-avatars.com/api/?background=${i.bgColor}&color=fff&name=${i.firstName}+${i.lastName}`}
            alt={i.name}
          />
        </ImgWrap>
        <P
          center
          strong
          margin="0 0 0.5rem"
        >{`${i.firstName} ${i.lastName}`}</P>
        <P center margin="0 0 0.5rem">
          {i.occupation}
        </P>
        <P>{i.bio}</P>
      </TeamMember>
    );
  });
};
const Landing = () => {
  return (
    <LandingWrap>
      <H1>Team:</H1>
      <Flex landing>{getTeam(team)}</Flex>
    </LandingWrap>
  );
};

export default Landing;
