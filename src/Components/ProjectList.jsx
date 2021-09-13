import Lists from "../Lists";
import Link from "./Link";

import styled from "styled-components";
import ReactGA from "react-ga";

const ProjectList = () => {
  ReactGA.initialize("UA-131380948-1");
  return (
    <ProjectContainer>
      <Section>
        <Heading>Projects</Heading>
        <Text>
          A few personal projects that I've worked on by myself or with friends.
          If you want to collaborate on something, send me an email!
        </Text>
        {Lists.projects.map((project, projectIndex) => {
          return (
            <Project key={projectIndex}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <Text>{project.desc}</Text>
              <TechItems>
                {project.techUsed.map((tech, techIndex) => {
                  return <TechItem key={techIndex}>{tech}</TechItem>;
                })}
              </TechItems>
              <Link
                link={project.Github}
                text="Github"
                handleClick={() =>
                  ReactGA.event({
                    category: "Click",
                    action: `${project.name} Github project link`,
                  })
                }
              />
            </Project>
          );
        })}
      </Section>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.main`
  width: 80%;
  margin: 20px 30px;
  @media (min-width: 992px) {
    width: 600px;
    margin: 40px 180px;
  }
`;

const Section = styled.div`
  margin: 40px 0px;
`;

const Heading = styled.h3`
  color: #d6d6d6;
  font-size: 36px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  line-height: 34px;
  margin: 0;
`;

const Project = styled.div``;

const ProjectTitle = styled.h4`
  color: #d6d6d6;
  font-size: 28px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  line-height: 26px;
  margin: 0;
  padding-top: 20px;
`;

const TechItems = styled.ul`
  padding-inline-start: 20px;
`;

const TechItem = styled.li`
  list-style-type: square;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
`;

const Text = styled.p`
  font-size: 18px;
`;

export default ProjectList;
