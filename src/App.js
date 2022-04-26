import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import About from "./components/About";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowSize";
import Port from "./components/Port";
import { resumeData } from "./config/data";
import VerticalTab from "./components/tab/VerticalTab";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const theme = {
    colors: {
      background: "#0a192e",
      first: "#ccd7f5",
      second: "#8893af",
      top: "#65ffda",
    },
  };



  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Container>
          {width > 730 && (
            <Side>
              <SideBar />
            </Side>
          )}
          <Content>
            <Banner />
            <About />
            {/* <div style={{ width: '70%', margin: 'auto' }}><VerticalTab data={resumeData.jobs} /></div> */}
            <Port />
            <Footer />
          </Content>
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
`;

const Side = styled.div`
  width: 10%;
  margin: 0;

  @media (max-width: 730px) {
    width: 0%;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.second};

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export default App;
