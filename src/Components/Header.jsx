import Button from "./Button";
import styled, { keyframes } from "styled-components";

const handleClick = (event) => {
  // form here.
};

const Header = () => {
  return (
    <HeaderContainer>
      <p className="subtitle">Hi there, I'm</p>
      <h1>Marie Sarah Felton</h1>
      <p>
        Welcome to my small space on the web! I'm Marie, a front-end developer
        and UX designer that aspires to create breathtaking digital experiences.
        I graduated from Seneca College's Web Development in 2017, and from
        HackerYou's UX Design in 2018.
      </p>
      <p>
        I've also taken a few courses at Ryerson University for Cyber Security
        and Digital Forensics, along with a some networking courses at
        Centennial College.
      </p>
      <Button title="Contact me" handleClick={handleClick} />
    </HeaderContainer>
  );
};

const Blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HeaderContainer = styled.header`
  padding: 60px 180px 30px;
  width: 600px;

  h1 {
    font-size: 54px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 52px;
    color: #d6d6d6;
    margin-top: 0px;
    &::after {
      content: "";
      background-color: #d6d6d6;
      margin-left: 16px;
      width: 3px;
      height: 50px;
      position: absolute;
      -webkit-animation: ${Blinking} 1.5s infinite;
      animation: ${Blinking} 1.5s infinite;
    }
  }
`;

export default Header;
