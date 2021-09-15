import Link from "./Link";
import Button from "./Button";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styled from "styled-components";
import ReactGA from "react-ga";

const SocialLinks = ({ setModalActive }) => {
  ReactGA.initialize("UA-131380948-1");
  return (
    <Socials aria-label="Social Links">
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
        handleClick={
          (() => setModalActive(true),
          ReactGA.event({
            category: "Click",
            action: "Email modal open",
          }))
        }
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
