import styled from "styled-components";
import Link from "./Link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const SocialLinks = ({ setModalActive }) => {
  return (
    <Socials aria-label="Social Links">
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
  );
};

const Socials = styled.aside`
  display: none;
  @media (min-width: 992px) {
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;

    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 200px;
      background-color: #d6d6d6;
      margin: 0px auto;
    }
  }
`;

export default SocialLinks;
