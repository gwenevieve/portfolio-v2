import styled from "styled-components";

const ModalButton = ({ text, handleClick }) => {
  return (
    <>
      <Button onClick={handleClick ? handleClick : undefined}>{text}</Button>
    </>
  );
};

const Button = styled.button`
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
  &:hover {
    color: #1b1b1b;
    background-color: #d6d6d6;
    cursor: pointer;
  }
`;

export default ModalButton;
