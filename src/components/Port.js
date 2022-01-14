import styled from "styled-components";
import { workData } from "../config/data";
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
    </StyledPort>
  );
};

const StyledPort = styled.div`
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

export default Port;
