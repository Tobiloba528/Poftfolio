import styled from "styled-components";
import { HiOutlineExternalLink } from "react-icons/hi";

const Work = ({ id, title, imageSrc, infoText, url, direction, tools }) => {
  return (
    <WorkItem
      layout={id % 2 === 0 && "row-reverse"}
      dir={id % 2 === 0 ? "left" : "right"}
    >
      <ImageContainer>
        <Image src={imageSrc} alt={title} />
      </ImageContainer>
      <Content style={{ textAlign: id % 2 === 0 ? "left" : "right" }}>
        <p>Featured Project</p>
        <h3>{title}</h3>
        <Info style={{ right: id % 2 === 0 ? "0" : "13%" }}>{infoText}</Info>
        <List
          style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
        >
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
`;

const ImageContainer = styled.div`
  width: 65%;
  height: 50vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
`;

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  width: 35%;
  /* text-align: right; */
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
`;

const Info = styled.div`
  position: relative;
  /* right: 13%; */
  width: 100%;
  background: #102340;
  color: ${({ theme }) => theme.colors.first};
  border-radius: 5px;
  padding: 25px;
  margin-top: 25px;
  line-height: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: flex-end; */
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
