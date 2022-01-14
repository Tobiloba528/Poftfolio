import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import useWindowSize from "../hooks/useWindowSize";
import { Button } from "../styles";

const NavBar = () => {
  const { width } = useWindowSize();
  return (
    <Nav>
      <Inner>
        <h1 onClick={() => scroll.scrollToTop()}>TOBILOBA</h1>
        {width > 730 ? (
          <List>
            <li>
              <LinkItem>
                <Link to="about" smooth={true} duration={1000}>
                  About
                </Link>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <Link to="experience" smooth={true} duration={1000}>
                  Experience
                </Link>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <Link to="portfolio" smooth={true} duration={1000}>
                  Portfolio
                </Link>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <Link to="contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </LinkItem>
            </li>
            <li>
              <Button>Resume</Button>
            </li>
          </List>
        ) : (
          <BiMenuAltRight size={40} color={"#65ffda"} />
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
    cursor: pointer;
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

const LinkItem = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  padding-right: 30px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  font-family: "Arvo", serif;
  cursor: pointer;
`;

export default NavBar;
