import React from 'react';
import styled from "styled-components";
import picture from "./picture.jpg"

const Wrapper = styled.div`
  background-color: #8d99ae;
  height: 100vh;
  display: flex;
`;

const Label = styled.label`
  font-size: 24px;
  color: black;
  font-family: 'Oswald', sans-serif;
  /* margin-top: 75px; */
`;


const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #edf2f4;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  margin-top: 200px;
  margin-left: 500px;
`;





function Mainpage() {
    return (
    <Wrapper>
        <Title>Hello, I am Jacob!</Title>
        <Label>I am a 8th grader who attends to YISS.</Label>
    </Wrapper>
    );

}
export default Mainpage;
