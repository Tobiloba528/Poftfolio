import styled from "styled-components";
import { IconContext } from "react-icons";
import moment from 'moment';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Button } from "../styles";

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <Container>
        <Inner>
          <h3>What's Next?</h3>
          <h1>Get In Touch</h1>
          <p>
            I am open to new job opportunities. If you think I can be a valuable
            part of your team, mentoring or just wanna say hi, kindly click the
            button below and send an email to{" "}
            <span>omitomotobiloba@gmail.com</span>
          </p>
          <Button><Anchor href="mailto:omitomotobiloba@gmail.com">Send Message</Anchor></Button>
        </Inner>
      </Container>
      <IconContext.Provider value={{ color: "#65ffda", size: 24 }}>
        <List>
          <Item>
            <a href="https://github.com/Tobiloba528" target="_blank">
              <AiFillGithub />
            </a>
          </Item>
          <Item>
            <a href="https://twitter.com/boy__tobiloba" target="_blank">
              <AiOutlineTwitter />
            </a>
          </Item>
          <Item>
            <a href="https://www.instagram.com/iam_thobyson/" target="_blank">
              <AiFillInstagram />
            </a>
          </Item>
          <Item>
            <a
              href="https://www.linkedin.com/in/omitomo-tobiloba/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Item>
        </List>
      </IconContext.Provider>

      <End>
      &copy; {moment().year()} <span className="one">Omitomo Tobiloba </span>. All rights Reserved 
      </End>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
  width: 90%;

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Inner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  width: 50%;
  margin: 0 auto;

  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.first};
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 40px;
  }

  h3 {
    color: rgb(101, 255, 218);
    font-family: "Arvo", serif;
  }

  span {
    color: #e66470;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 550px) {
    width: 90%;
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 15px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  width: 50%;
  display: none;
  padding: 0;
  margin: 0 auto;

  @media (max-width: 730px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Item = styled.li`
  flex: 1;
`;

const End = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  font-family: "Arvo", serif;
  margin: 10px auto;

  .one {
    color: rgb(101, 255, 218);
  }
  .two {
    color: #e66470;
  }

  @media (max-width: 550px) {
    width: 90%;
    font-size: 15px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.top};
`

export default Footer;
