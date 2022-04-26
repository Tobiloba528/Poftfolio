import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "../styles";
import Lottie from "react-lottie";
import { compAnimation, titleAnim, fade } from "../animation";

const Banner = () => {
  
  return (
    <StyledBanner>
      <Inner variants={compAnimation} initial="hidden" animate="show">
        <div>
          <Hide>
            <motion.h3 variants={titleAnim}>Hi, &nbsp; my name is</motion.h3>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnim}>Tobiloba.</motion.h1>
          </Hide>
          <Hide>
            <motion.h1 className="second" variants={titleAnim}>
              I <span className="one">build</span> things for the{" "}
              <span className="one">web</span>.
            </motion.h1>
          </Hide>
          <motion.p variants={fade}>
            I’m a software engineer who specializes in building exceptional
            websites and applications. I enjoy solving problem, hence I deliver
            top notch products and <span className="two">solutions</span>.
          </motion.p>
          <Link to="contact" smooth={true} duration={1000}>
            <Button variants={fade}>Get in touch</Button>
          </Link>
        </div>
      </Inner>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  /* position: relative;
  padding: 0;
  margin: 0; */
  /* background: ${({ theme }) => theme.colors.background}; */
  /* background: linear-gradient(
    90deg,
    rgba(6, 107, 217, 1) 0%,
    rgba(3, 34, 130, 1) 86%
  ); */
  /* color: white; */
  /* min-height: 76vh; */
`;

const Inner = styled(motion.div)`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  width: 90%;
  display: flex;
  padding-top: 100px;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 0 auto;
  min-height: 90vh;

  h3 {
    color: ${({ theme }) => theme.colors.top};
    font-family: "Arvo", serif;
  }

  h1 {
    font-size: 70px;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.first};
  }

  .second {
    color: ${({ theme }) => theme.colors.second};
  }

  p {
    width: 45%;
    font-size: 17px;
    color: #e6e6e6;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.second};
    margin: 30px 0;
  }

  .one {
    color: #e66470;
  }

  .two {
    color: ${({ theme }) => theme.colors.top};
  }

  @media (max-width: 985px) {
    h1 {
      font-size: 50px;
    }
    p {
      width: 70%;
    }
  }

  @media (max-width: 730px) {
    h1 {
      font-size: 35px;
    }
    h3 {
      font-size: 15px;
    }
    p {
      width: 100%;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Banner;
