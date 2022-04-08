import styled from "styled-components";

export const StyledCardGroup = styled.div`
  width: ${(props) => props.wd};
  display: ${(props) => props.dis};
  flex-direction: ${(props) => props.Direct};
  padding: ${(props) => props.pad};
  margin: ${(props) => props.mar};
  // margin-top: 4.5%;
  // margin-bottom: 4.5%;
  // justify-content: center;
  // align-items:center;

`;

export const Para = styled.div`
width: ${(props) => props.wd};
  padding: ${(props) => props.pad};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Pic = styled.div`
  width: ${(props) => props.wd};
  padding: ${(props) => props.pad};
`;