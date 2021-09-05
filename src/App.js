import { useState } from "react";
import Header from "./Components/Header";
import TechList from "./Components/TechList";
import Socials from "./Components/Social";
import ProjectList from "./Components/ProjectList";
import Footer from "./Components/Footer";
import ContactModal from "./Components/Modal";
import styled from "styled-components";

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <Container>
      <Header setModalActive={setModalActive} />
      <TechList />
      <ProjectList />
      <Socials setModalActive={setModalActive} />
      <Footer setModalActive={setModalActive} />
      <ContactModal setModalActive={setModalActive} modalActive={modalActive} />
    </Container>
  );
}

const Container = styled.div`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: "Lato", sans-serif;
  color: #d6d6d6;
  background-color: #1b1b1b;
  margin: 0px;
  padding: 20px 0px;

  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    line-height: 30px;
    &.subtitle {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
`;

export default App;
