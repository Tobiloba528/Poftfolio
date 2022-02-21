import styled from "styled-components";
import { motion } from 'framer-motion'
import { workData, sideProjects } from "../config/data";
import ProjectItem from "./common/ProjectItem";
import Work from "./common/Work";

const Port = () => {
  return (
    <StyledPort id="portfolio">
      <Header>
        <h3>Some Things I’ve Built </h3>
        <Line></Line>
      </Header>
      <Works>
        {workData.map((workItem) => (
          <Work
            key={workItem.id}
            id={workItem.id}
            url={workItem.url}
            infoText={workItem.infoText}
            imageSrc={workItem.imageSrc}
            title={workItem.title}
            tools={workItem.tools}
            directio={workItem.direction}
          />
        ))}
      </Works>
      <Projects>
        <h3>Other side Projects</h3>
        <h4>Frontend Projects | Backend Project</h4>
        <Row>
          {sideProjects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              url={project.url}
              github={project.github}
              info={project.info}
              tools={project.tools}
            />
          ))}
        </Row>
      </Projects>
      <LinkContainer>
        <a href="https://github.com/Tobiloba528">Click to view more</a>
      </LinkContainer>
    </StyledPort>
  );
};

const StyledPort = styled(motion.div)`
  width: 90%;
  min-height: 70vh;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 30px;

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

const Works = styled.div`
  width: 100%;
`;

const Projects = styled.div`
  width: 90%;
  margin-top: 200px;

  h3 {
    text-align: center;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.first};
  }

  h4 {
    text-align: center;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.first};
    margin-bottom: 50px;
  }

  @media (max-width: 730px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    h3 {
      font-size: 25px;
    }

    h4 {
      font-size: 15px;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 730px) {
    display: block;
  }
`;

const LinkContainer = styled.a`
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  a {
    color: ${({ theme }) => theme.colors.top};
    font-family: "Arvo", serif;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export default Port;
