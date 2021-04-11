// Styled:
import styled from "styled-components";

const LandingWrap = styled.div`
  height: 100%;
  display: flex;
  margin: 4rem;
  flex-direction: column;
  @media (max-width: 700px) {
    margin: 3rem;
  }
  @media (max-width: 500px) {
    margin: 2rem;
  }
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 33%;
  @media (max-width: 700px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 6rem;
  min-width: 6rem;
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  @media (max-width: 500px) {
    margin: 1rem;
  }
`;

export { LandingWrap, Img, ImgWrap, TeamMember };
