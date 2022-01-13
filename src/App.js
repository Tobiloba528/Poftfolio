import "./App.css";
import { ThemeProvider } from 'styled-components'
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import About from './components/About';
import Footer from './components/Footer';

function App() {

  const theme = {
    colors: {
      background: '#0a192e',
      first: '#ccd7f5',
      second: '#8893af',
      top: '#65ffda',
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <Container>
        <Side>
          <SideBar />
        </Side>
        <Content>
          <Banner />
          <About />
          <Footer />
        </Content>
      </Container>
    </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  width: 10%;
  margin: 0;
`;

const Content = styled.div`
  width: 90%;
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.second};
`;

export default App;
