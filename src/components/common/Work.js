import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { HiOutlineExternalLink } from "react-icons/hi";

const Work = ({ id, title, imageSrc, infoText, url, direction, tools }) => {
  const { width } = useWindowSize();

  return (
    <WorkItem layout={id % 2 === 0 && "row-reverse"}>
      <ImageContainer>
        <Image src={imageSrc} alt={title} />
      </ImageContainer>
      <Content dir={id % 2 === 0 ? "left" : "right"}>
        <p>Featured Project</p>
        <h3>{title}</h3>
        <Info layout={id % 2 === 0 && "row-reverse"}>{infoText}</Info>
        <List layout={id % 2 === 0 && "row-reverse"}>
          {tools.map((tool, index) => (
            <Item key={index}>{tool}</Item>
          ))}
        </List>
        <div>
          <a href={url} target="_blank">
            <HiOutlineExternalLink color={"#65ffda"} size={30} />
          </a>
        </div>
      </Content>
    </WorkItem>
  );
};

const WorkItem = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  width: 90%;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    display: block;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 65%;
  height: 50vh;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
`;

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  width: 35%;
  text-align: ${({ dir }) => dir};
  position: relative;

  p {
    color: ${({ theme }) => theme.colors.top};
    font-family: "Arvo", serif;
  }

  h3 {
    color: ${({ theme }) => theme.colors.first};
    margin-top: -5px;
    font-size: 25px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    /* text-align: center; */
    padding: 0;
  }
`;

const Info = styled.div`
  position: relative;
  right: ${({ layout }) => (layout ? "0" : "13%")};
  width: 100%;
  background: #102340;
  color: ${({ theme }) => theme.colors.first};
  border-radius: 5px;
  padding: 25px;
  margin-top: 25px;
  line-height: 30px;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    right: 0;
    left: 0;
      }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: ${({ layout }) => (layout ? "flex-start" : "flex-end")};
  width: 100%;
  padding: 0;
`;

const Item = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  margin: 0 10px 0 0;
  font-family: "Arvo", serif;
  font-size: 10px;
`;
export default Work;
