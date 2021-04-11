// Styled:
import styled from "styled-components";

const P = styled.p`
  margin: ${(props) => (props.margin ? `${props.margin}` : `0`)};
  padding: 0;
  text-align: ${(props) => (props.center ? `center` : `inherit`)};
  font-weight: ${(props) => (props.strong ? `700` : `inherit`)};
`;

const H1 = styled.h2`
  margin: 0;
  text-align: center;
  border-bottom: 1px solid black;
  margin-bottom: 0.5rem;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  background-color: #12d433;
  border: none;
  padding: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* @media (max-width: 500px) {
    flex-direction: ${(props) => {
    if (props.landing) {
      return `column`;
    }
  }};
  } */
`;

const Left = styled.div`
  flex: 1 0 auto;
`;

const Right = styled.div`
  flex: 2 0 auto;
`;

const SectionsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d1d1d1;
  margin-bottom: 0.5rem;
`;

const Add = styled.div`
  cursor: pointer;
  border: 1px solid #d1d1d1;
  margin: 0 0.5rem 0.5rem 0;
`;

export {
  Add,
  P,
  H1,
  H2,
  Wrap,
  Input,
  Flex,
  Left,
  Right,
  SectionsWrap,
  Section,
};
