import Button from "./Button";
import styled, { keyframes } from "styled-components";

const Header = ({ setModalActive }) => {
  return (
    <HeaderContainer>
      <Text>Hi there, I'm</Text>
      <Heading>Marie Sarah Felton</Heading>
      <Text>
        Welcome to my small space on the web! I'm Marie, a front-end developer
        and UX designer that aspires to create breathtaking digital experiences.
        I graduated from Seneca College's Web Development in 2017, and from
        HackerYou's UX Design in 2018.
      </Text>
      <Text>
        I've also taken a few courses at Ryerson University for Cyber Security
        and Digital Forensics, along with a some networking courses at
        Centennial College.
      </Text>
      <Button
        aria="Opens contact dialog"
        type="button"
        text="Contact me"
        handleClick={() => setModalActive(true)}
      />
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
  width: 80%;
  margin: 20px 30px;
  @media (min-width: 992px) {
    width: 600px;
    margin: 40px 180px;
  }
`;
const Heading = styled.h1`
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
  @media (max-width: 600px) {
    font-size: 42px;
  }
`;

const Text = styled.p`
  font-size: 18px;
`;

export default Header;
