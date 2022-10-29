import React, {useState}from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    background-color: yellow;
    height: 1000px;  
    text-align: center;
    flex-direction: column;
`;


const Title = styled.div`
font-size: 24px;
color: blue;
padding-top: 30px;
border: 10px solid black;
`;
//TODO: create new div and introduce your self

const Introduce = styled.div`
font-size: 24px;
color: black;
margin-top: 60px;
`;

const AppleImage = styled.img`
width:100px;
height:100px;
border: 5px solid blue;
margin-left:50px;
`;

const YissImage = styled.img`
width:100px;
height:100px;
margin-top:80px;
border: 5px solid blue;
margin-left:50px;
`

const Button = styled.button`
    width:200px;
    height:80px;
    background-color:blueviolet;
    border-radius:30px;
    color:darkcyan;
    font-size: 30px;
`
const Number = styled.div`
    color: green;
    font-size: 30px;
`
const utton = styled.button`
width:200px;
height:80px;
`
    

function PageOne() {
    const [number, setNumber] = useState(1);
    function hello() {
        setNumber(number - 1);
    }
       
    return <Wrapper><Title> Jacob Chae<br></br>8th Grade<br></br>Yongsan International School of Seoul</Title>
    <Introduce> My name is Jacob. I am a student who attends to YISS. I am learning Java Script.</Introduce>
    <AppleImage src="https://dictionary.cambridge.org/ko/images/thumb/apple_noun_001_00650.jpg?version=5.0.252"/>
    <YissImage src="https://media.yisseoul.org/logos/yiss-logo-vertical.jpg?w=150&q=100"/>
    <Button onClick={hello}>Click Me!!</Button>
    <Number>16</Number>
    <Button onClick={hello}>ME</Button>
    </Wrapper>
}
    

export default PageOne;
