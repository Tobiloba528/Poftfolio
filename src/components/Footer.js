import styled from "styled-components";
import { Button } from "../styles";

const Footer = () => {
  return (
    <StyledFooter>
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
          <Button>Send Message</Button>
        </Inner>
      </Container>
      <End>
        Built by <span className="one">Omitomo Tobiloba</span>. Design inspired
        by <span className="two">Brittany Chiang</span>
      </End>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
  width: 90%;
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
`;

const End = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  font-family: "Arvo", serif;

  .one {
    color: rgb(101, 255, 218);
  }
  .two {
    color: #e66470;
  }
`;

export default Footer;
