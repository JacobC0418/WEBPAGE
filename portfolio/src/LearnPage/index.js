import React from 'react';
import styled from "styled-components";
import picture from "./picture.jpg"
// import {ProgressBar} from "react-bootstrap";
// import "bootstrap/dist/css/boostrap.min.css";

const Wrapper = styled.div`
  background-color: #8d99ae;
  height: 100vh;
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #edf2f4;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  margin-top: 200px;
  margin-left: 500px;
`;

function LearnPage() {
    return(
    <Wrapper>
    <Title>Yongsan International School of Seoul
         8th Grade</Title>
</Wrapper>

);
}


export default LearnPage; 