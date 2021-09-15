import Link from "./Link";
import Button from "./Button";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styled from "styled-components";
import ReactGA from "react-ga";

const Footer = ({ setModalActive }) => {
  ReactGA.initialize("UA-131380948-1");
  return (
    <FooterContainer>
      <Socials>
        <Link
          text="Github"
          icon={faGithub}
          link="https://github.com/gwenevieve"
          handleClick={() => {
            ReactGA.event({
              category: "Click",
              action: "Github click",
            });
          }}
        />
        <Link
          text="LinkedIn"
          icon={faLinkedin}
          link="https://www.linkedin.com/in/marie-felton/"
          handleClick={() => {
            ReactGA.event({
              category: "Click",
              action: "LinkedIn click",
            });
          }}
        />
        <Button
          aria="Opens contact dialog"
          type="button"
          socialLinks={true}
          icon={faEnvelope}
          text="Contact me"
          handleClick={() => {
            setModalActive(true);
            ReactGA.event({
              category: "Click",
              action: "Email modal open",
            });
          }}
        />
      </Socials>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()} Marie Sarah Felton
      </Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer``;

const Socials = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  text-align: center;
`;

export default Footer;
