import styled from "styled-components";
import { IconContext } from "react-icons";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const SideBar = () => {
  return (
    <Bar>
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
          <Item remove>
            <Line></Line>
          </Item>
        </List>
      </IconContext.Provider>
    </Bar>
  );
};

const Bar = styled.div`
  color: white;
  background: ${({ theme }) => theme.colors.background};
  overflow: auto;
  height: 90vh;
  position: sticky;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style: none;
  position: fixed;
`;

const Item = styled.li`
  margin-bottom: ${({ remove }) => (remove ? "-10px" : "25px")};
`;

const Line = styled.div`
  width: 1px;
  background: white;
  margin: 15px auto 0;
  height: 150px;
`;

export default SideBar;
