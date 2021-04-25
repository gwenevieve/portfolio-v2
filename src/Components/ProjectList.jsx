import Button from "./Button";
import styled from "styled-components";

const Project = ({ title, desc }) => {
  return (
    <ProjectContainer>
      <h3>{title}</h3>
      <p>{desc}</p>

      <Button title="Github link" />
      <Button title="Live link" />
    </ProjectContainer>
  );
};

const ProjectContainer = styled.main`
  padding: 40px 180px;
  width: 600px;
`;

export { Project };
