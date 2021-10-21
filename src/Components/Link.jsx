import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = ({ text, link, icon, handleClick }) => {
  return (
    <>
      {icon ? (
        <StyledIcon
          onClick={handleClick ? handleClick : undefined}
          icon={icon}
          rel="noopener noreferrer"
          href={link}
          target="_blank">
          <FontAwesomeIcon icon={icon} />
          {text}
        </StyledIcon>
      ) : (
        <StyledLink rel="noopener noreferrer" href={link} target="_blank">
          {text}
        </StyledLink>
      )}
    </>
  );
};

const StyledLink = styled.a`
  display: inline-block;
  font-family: "Lato", sans-serif;
  color: #d6d6d6;
  font-size: 18px;
  background: unset;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 12px 0px;
  margin: 20px 0px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  line-height: initial;
  transition: 0.4s;
  &:hover {
    color: #1b1b1b;
    background-color: #d6d6d6;
    cursor: pointer;
  }
`;

const StyledIcon = styled.a`
  display: inline-block;
  font-family: "Lato", sans-serif;
  color: #d6d6d6;
  background: unset;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 12px 0px;
  margin: 20px 0px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  line-height: initial;
  transition: 0.4s;
  @media (max-width: 500px) {
    width: 80px;
  }
  &:hover {
    color: #1b1b1b;
    background-color: #d6d6d6;
    cursor: pointer;
  }

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: unset;
    margin: 10px 0px;
    svg {
      margin-bottom: 5px;
      font-size: 40px;
      @media (max-width: 500px) {
        font-size: 24px;
      }
    }
    &:hover {
      color: unset;
      background-color: unset;
      cursor: pointer;
    }
  `}
`;

export default Link;
