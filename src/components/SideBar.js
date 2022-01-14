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
      <IconContext.Provider value={{ color: "#65ffda", size: 20 }}>
        <List>
          <Item>
            <AiFillGithub />
          </Item>
          <Item>
            <AiOutlineTwitter />
          </Item>
          <Item>
            <AiFillInstagram />
          </Item>
          <Item>
            <AiFillLinkedin />
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
