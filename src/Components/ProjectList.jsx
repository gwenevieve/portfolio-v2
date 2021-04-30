import Lists from "./Lists";
import Button from "./Button";
import styled from "styled-components";

const ProjectList = () => {
  return (
    <ProjectContainer>
      {Lists.projects.map((element, i) => {
        return <Project key={i}>{element.techUsed}</Project>;
      })}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.main`
  padding: 40px 180px;
  width: 600px;
`;

const Project = styled.div``;

export default ProjectList;
