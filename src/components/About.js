import styled from "styled-components";
import { GrPlayFill } from "react-icons/gr";
import { FiPlay } from "react-icons/fi";
import { ImPlay3 } from "react-icons/im";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <StyledAbout id="about">
      <Header>
        <h3>About Me </h3>
        <Line></Line>
      </Header>
      <Inner>
        <Content>
          <p>
            Hi, my name is Omitomo Tobiloba, a software developer from Nigeria.
            I enjoy building things from nothing and also <span> solving</span>{" "}
            problems
          </p>
          <p>
            I am highly skilled in building scalable web applications leveraging
            on technologies such as Javascript, React and Node. I'm always happy
            to learn new things and work on challenging projects either by
            myself or with an amazing team. I am driven with the goal to always
            deliver top-notch products with focus on fast, elegant and
            accessible user experiences.
          </p>
          <p>
            Her are some of the technologies I have been working with recently:
          </p>
          <Lists>
            <IconContext.Provider value={{ color: "#65ffda" }}>
              <List>
                <Item>
                  <ImPlay3 className="icon" />
                  Javascript (ES6)
                </Item>
                <Item>
                  <ImPlay3 className="icon" />
                  React
                </Item>
                <Item>
                  <ImPlay3 className="icon" />
                  Node.js
                </Item>
              </List>

              <List>
                <Item>
                  <ImPlay3 className="icon" />
                  MongoDB
                </Item>
                <Item>
                  <ImPlay3 className="icon" />
                  Typescript
                </Item>
                <Item>
                  <ImPlay3 className="icon" />
                  MERN stack
                </Item>
              </List>
            </IconContext.Provider>
          </Lists>
        </Content>
        <ImageContainer>
          <ImageLayer>
            <SecondLayer>
              <Image src="tobi.jpg" alt="Picture" />
            </SecondLayer>
          </ImageLayer>
        </ImageContainer>
      </Inner>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;


  @media (max-width: 850px) {
    margin-bottom: 50px
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  h3 {
    margin-right: 10px;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.first};
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const Line = styled.div`
  background: ${({ theme }) => theme.colors.first};
  height: 1px;
  flex: 1;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    flex: 1;
  }

  @media (max-width: 850px) {
    display: block;
    width: 100%;
  }
`;

const Content = styled.div`
  p {
    line-height: 30px;
    font-size: 16px;
  }

  span {
    color: ${({ theme }) => theme.colors.top};
  }

  @media (max-width: 850px) {
    margin-bottom: 30px;

    font-size: 12px;
    p {
      font-size: 15px;
    }
    /* width: 100%; */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageLayer = styled.div`
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 18em;
    height: 18em;
    right: -25px;
    top: 10px;
    border: 3px solid #65ffda;
    border-radius: 5px;
  }

  @media (max-width: 550px) {
    &:before {
      right: -10px;
      width: 15em;
      height: 15em;
    }
  }
`;

const SecondLayer = styled.div`
  position: relative;
  width: 18em;
  height: 18em;

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: rgb(101, 255, 218, 0.3);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
  }

  &::hover {
    background: red;
  }

  @media (max-width: 550px) {
    width: 15em;
    height: 15em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const List = styled.div`
  .icon {
    margin-right: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`;

export default About;
