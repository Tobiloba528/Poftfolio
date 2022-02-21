import styled from "styled-components";
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
  @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
  border: 1px solid ${({ theme }) => theme.colors.top};
  padding: 10px 30px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.top};
  background: transparent;
  font-family: 'Arvo', serif;
  cursor: pointer;
`;


export const Flex = styled.div`
    
`
