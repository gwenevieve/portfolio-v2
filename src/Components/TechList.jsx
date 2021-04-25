import Lists from "./Lists";
import styled from "styled-components";

const TechList = () => {
  return (
    <Techs>
      <p>Some of the technologies I've recently worked with:</p>
      <ul classList="techList">
        {Lists.techList.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </Techs>
  );
};

const Techs = styled.div`
  padding: 40px 180px;
  width: 600px;

  ul {
    li {
      color: #d6d6d6;
      font-size: 18px;
      line-height: 35px;
    }
  }
`;

export default TechList;
