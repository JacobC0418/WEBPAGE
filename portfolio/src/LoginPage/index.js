import React, {useState} from 'react';
import styled from "styled-components";
import picture from "./picture.jpg"
import { useHistory } from 'react-router-dom';
const Wrapper = styled.div`
  background-color: #8d99ae;
  height: 100vh;
  display: flex;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #edf2f4;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  margin-top: 100px;
  margin-right: 100px;
`;

const LeftSide = styled.div`
  width: 50%;
`;
const RightSide = styled.div`
  width: 50%;
  background-image: url(${picture});
  background-size: cover;
`;

const Label = styled.label`
  font-size: 24px;
  color: black;
  font-family: 'Oswald', sans-serif;
  /* margin-top: 75px; */
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

const Input = styled.input`
  font-size: 24px;
  width: 80%;
  margin-bottom: 30px;
  border: none;
`;
const Button = styled.button`
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  background-color: lightsteelblue;
  width: 50%;
  margin-left: 70px;
`;

function LoginPage() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });
  const history = useHistory();
  const navigateToMainPage = () => {
    console.log(user);
    if(user.id == "staff" && user.password == "secure1234"){
      history.push("/main")
    }
  };

  const onChangeUser = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setUser({...user, [name]: value});
    console.log(user);
  };
    
  return (

   <Wrapper>
    <LeftSide>
      <Title>Welcome Back!</Title>
      <LabelWrapper>
      <Label>ID</Label>
      <Input name="id" value={user.id} type="text" onChange={onChangeUser}></Input>
      <Label>Password</Label>
      <Input name="password" value={user.password} type="password" onChange={onChangeUser}></Input>
      <Button onClick={navigateToMainPage}>Login</Button>
      </LabelWrapper>
    </LeftSide>
    <RightSide></RightSide>
  </Wrapper>
  );
}
export default LoginPage;


