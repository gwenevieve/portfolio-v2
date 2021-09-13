import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalButton = ({
  text,
  icon,
  type,
  modal,
  aria,
  disabled,
  handleClick,
  handleKeyDown,
}) => {
  return (
    <>
      {icon && !modal ? (
        <ButtonIcon type={type} onClick={handleClick ? handleClick : undefined}>
          <FontAwesomeIcon icon={icon} />
        </ButtonIcon>
      ) : null}

      {icon && modal ? (
        <ButtonModalIcon
          modal={modal}
          type={type}
          icon={icon}
          disabled={disabled ? disabled : undefined}
          onClick={handleClick ? handleClick : undefined}>
          <FontAwesomeAnimation>
            <FontAwesomeIcon icon={icon} />
          </FontAwesomeAnimation>
        </ButtonModalIcon>
      ) : null}

      {!icon ? (
        <Button
          aria-label={aria}
          modal={modal}
          type={type}
          onKeyDown={handleKeyDown ? handleKeyDown : undefined}
          onClick={handleClick ? handleClick : undefined}>
          {text}
        </Button>
      ) : null}
    </>
  );
};

const Button = styled.button`
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: ${(props) => (props.modal === true ? "#1b1b1b" : "#d6d6d6")};
  background: unset;
  border: ${(props) =>
    props.modal === true ? "1px solid #1b1b1b" : "1px solid #d6d6d6"};
  border-radius: 5px;
  padding: 12px 0px;
  margin: 20px 0px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  line-height: initial;
  transition: 0.4s;
  &:hover {
    color: ${(props) => (props.modal === true ? "#d6d6d6" : "#1b1b1b")};
    background-color: ${(props) =>
      props.modal === true ? "#1b1b1b" : "#d6d6d6"};
    cursor: pointer;
  }
`;

const ButtonModalIcon = styled.button`
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 22px;
  color: ${(props) =>
    props.modal === true && props.icon ? "#1b1b1b" : "#d6d6d6"};
  background: unset;
  border: ${(props) =>
    props.modal === true ? "1px solid #1b1b1b" : "1px solid #d6d6d6"};
  border-radius: 5px;
  padding: 10px 0px;
  margin: 20px 0px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  line-height: initial;
  transition: 0.4s;
  &:hover {
    color: ${(props) =>
      props.modal === true && props.icon ? "#d6d6d6" : "#1b1b1b"};
    background-color: ${(props) =>
      props.modal === true && props.icon ? "#1b1b1b" : "#d6d6d6"};
    cursor: pointer;
  }
  &:disabled:hover {
    color: #1b1b1b;
    cursor: default;
    background: unset;
  }
`;

const Spinning = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const FontAwesomeAnimation = styled.div`
  -webkit-animation: ${Spinning} 1.8s linear infinite;
  -moz-animation: ${Spinning} 1.8s linear infinite;
  animation: ${Spinning} 1.8s linear infinite;
`;

const ButtonIcon = styled.button`
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  color: #1b1b1b;
  border: unset;
  background: unset;
  text-decoration: none;
  line-height: initial;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
  }
`;

export default ModalButton;
