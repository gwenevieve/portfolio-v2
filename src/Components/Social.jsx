import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";

const SocialLinks = ({ handleClick }) => {
  return (
    <Socials>
      <Button
        title="Github"
        icon={faGithub}
        link="https://github.com/gwenevieve"
      />
      <Button
        title="LinkedIn"
        icon={faLinkedin}
        link="https://www.linkedin.com/in/marie-felton/"
      />
      <Button title="Email" icon={faEnvelope} handleClick={handleClick} />
    </Socials>
  );
};

const Socials = styled.div`
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
`;

export default SocialLinks;
