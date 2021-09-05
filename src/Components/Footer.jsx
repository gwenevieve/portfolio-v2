import styled from "styled-components";
import Link from "./Link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = ({ setModalActive }) => {
  return (
    <FooterContainer>
      <Socials>
        <Link
          text="Github"
          icon={faGithub}
          link="https://github.com/gwenevieve"
        />
        <Link
          text="LinkedIn"
          icon={faLinkedin}
          link="https://www.linkedin.com/in/marie-felton/"
        />
        <Link
          text="Email"
          icon={faEnvelope}
          handleClick={() => setModalActive(true)}
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
  }
`;

const Copyright = styled.p`
  text-align: center;
`;

export default Footer;
