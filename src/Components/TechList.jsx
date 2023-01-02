import Lists from "../lists";

import styled from "styled-components";

const TechList = () => {
  return (
    <Techs aria-label="This section contains information about the technologies I've recently worked with">
      <Section>
        <Heading>Technologies</Heading>
        <Text>Some of the technologies I've recently worked with:</Text>
        <TechItems>
          {Lists.techList.map((element, i) => {
            return <TechItem key={i}>{element}</TechItem>;
          })}
        </TechItems>
      </Section>
    </Techs>
  );
};

const Techs = styled.aside`
  width: 80%;
  margin: 20px 30px;
  @media (min-width: 992px) {
    width: 600px;
    margin: 40px 180px;
  }
`;

const Section = styled.div`
  margin: 30px 0px;
`;

const Heading = styled.h2`
  color: #d6d6d6;
  font-size: 36px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  line-height: 34px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 18px;
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

export default TechList;
