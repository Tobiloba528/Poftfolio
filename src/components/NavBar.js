import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import  useWindowSize from "../hooks/useWindowSize";
import { Button } from "../styles";

const NavBar = () => {
  const { width } = useWindowSize();
  return (
    <Nav>
      <Inner>
        <h1>TOBILOBA</h1>
        {width > 730 ? (
          <List>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Experience</Link>
            </li>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Button>Resume</Button>
            </li>
          </List>
        ) : (
          <BiMenuAltRight size={40} color={'#65ffda'}/>
        )}
      </Inner>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background};
  color: white;

  h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.top};
  }

  span {
    color: red;
  }
`;

const Inner = styled.div`
  width: 90%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const Link = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  padding-right: 30px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  font-family: "Arvo", serif;
`;

export default NavBar;
