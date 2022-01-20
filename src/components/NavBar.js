import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";
import { Button } from "../styles";

const NavBar = ({ isOpen, setIsOpen }) => {
  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const { width } = useWindowSize();
  return (
    <Nav>
      <Inner>
        <h1 onClick={() => scroll.scrollToTop()}>TOBILOBA</h1>
        {width > 730 ? (
          <List>
            <li>
              <LinkItem>
                <Link onClick={() => scroll.scrollToTop()}>Home</Link>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <Link to="about" smooth={true} duration={1000} offset={-100}>
                  About
                </Link>
              </LinkItem>
            </li>
            <li>
              {/* <LinkItem>
                <Link to="experience" smooth={true} duration={1000}>
                  Experience
                </Link>
              </LinkItem> */}
            </li>
            <li>
              <LinkItem>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={1000}
                  offset={-100}
                >
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
              <Button>
                <a
                  href="https://drive.google.com/file/d/1Z8zdOtLAaT3YgE14TfwMouEPPhtLgQWt/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </Button>
            </li>
          </List>
        ) : isOpen ? (
          <AiOutlineClose
            className="icon"
            size={28}
            color={"#65ffda"}
            onClick={toggleNav}
          />
        ) : (
          <BiMenuAltRight
            className="icon"
            onClick={toggleNav}
            size={40}
            color={"#65ffda"}
          />
        )}
      </Inner>
      <MobileNav className={!isOpen && "navOpen"}>
        <MobileList>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              offset={-100}
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              offset={-100}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          {/* <li>
              <Link
                to="experience"
                smooth={true}
                duration={1000}
                onClick={toggleNav}
              >
                Experience
              </Link>
            </li> */}
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              offset={-100}
              onClick={toggleNav}
            >
              Portfolio
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
          <li>
            <Button>
              <a
                href="https://drive.google.com/file/d/1Z8zdOtLAaT3YgE14TfwMouEPPhtLgQWt/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </Button>
          </li>
        </MobileList>
      </MobileNav>
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

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.top};
  }

  .navOpen {
    transform: translateX(100%);
  }
`;

const Inner = styled.div`
  width: 90%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  transition: all 1s ease;

  .icon {
    cursor: pointer;
    z-index: 5;
  }
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

const MobileNav = styled.div`
  display: none;

  @media (max-width: 730px) {
    background: #102340;
    height: 100vh;
    width: 50%;
    display: block;
    position: fixed;
    bottom: 0;
    left: 50%;
    transition: transform 1s ease;
    overflow: hidden;
    z-index: 1;
  }

  @media (max-width: 500px) {
    width: 70%;
    left: 30%;
  }
`;

const MobileList = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    margin: 0 0 50px 0;
    font-family: "Arvo", serif;
    cursor: pointer;
  }
`;

export default NavBar;
