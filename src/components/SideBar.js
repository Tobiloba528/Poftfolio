import styled from "styled-components";
import { motion } from 'framer-motion';
import { compAnimation, fade } from '../animation'
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
        <List variants={compAnimation} initial='hidden' animate='show'>
          <Item variants={fade}>
            <a href="https://github.com/Tobiloba528" target="_blank">
              <AiFillGithub />
            </a>
          </Item>
          <Item variants={fade}>
            <a href="https://twitter.com/boy__tobiloba" target="_blank">
              <AiOutlineTwitter />
            </a>
          </Item>
          <Item variants={fade}>
            <a href="https://www.instagram.com/tobiloba_grm/" target="_blank">
              <AiFillInstagram />
            </a>
          </Item>
          <Item variants={fade}>
            <a
              href="https://www.linkedin.com/in/omitomo-tobiloba/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Item>
          <Item remove variants={fade}>
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

const List = styled(motion.ul)`
  list-style: none;
  position: fixed;
`;

const Item = styled(motion.li)`
  margin-bottom: ${({ remove }) => (remove ? "-10px" : "25px")};
`;

const Line = styled.div`
  width: 1px;
  background: white;
  margin: 15px auto 0;
  height: 150px;
`;

export default SideBar;
