import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Hobby from "./components/Hobby/Hobby";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <Banner>
        <Header/>
        <ProfComponent/>
      </Banner>
      <Services/>
      <LightColor>
        <Projects/>
      </LightColor>
        <Hobby/>
      <LightColor>
        <Footer/>
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
height: 100vh
@media (max-width: 640px) {
  heigth: 100%;
  padding-bottom: 1rem;
}
`;
const LightColor = styled.div`
background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;



