import Header from "./Components/Header";
import TechList from "./Components/TechList";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <TechList />
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

  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    &.subtitle {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
`;

export default App;
