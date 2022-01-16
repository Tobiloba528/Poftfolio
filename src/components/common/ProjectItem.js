import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectItem = ({ title, url, github, info, tools }) => {
  return (
    <Item>
      <Top>
        <a href={github}>
          <FiGithub color={"#65ffda"} size={30} />
        </a>
        {url && (
          <a href={url}>
            <HiOutlineExternalLink color={"#65ffda"} size={30} />
          </a>
        )}
      </Top>
      <h2>{title}</h2>
      <Info>
        {info}
      </Info>
      <List>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </List>
    </Item>
  );
};

const Item = styled.div`
  min-width: 25%;
  flex: 1;
  background: #102340;
  height: 400px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover{
    margin-top: -2px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.first};
    font-size: 24px;
    align-items: left;
  }

  @media (max-width: 1150px) {
    min-width: 35%;
    margin: 10px;
  }

  @media (max-width: 730px) {
    /* min-width: 100%; */
    margin: 20px 0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.p`
  line-height: 25px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 100px;

  & > li {
    font-size: 13px;
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.top};
    font-family: "Arvo", serif;
  }
`;

export default ProjectItem;
