import React from 'react';
import {
  Wrapper,
  Container,
  Logo,
  SideRight,
  Avatar
} from './styles';
import { useNavigate } from 'react-router-dom';

import valorant from '../../assets/valorant.png';
import riot from '../../assets/riotgames.png';


const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
      <Wrapper>
        <Container>
          <Logo  onClick={() => navigate(`/agents`)}>
            <img src={riot} alt="..."/>
            <hr />
            <img src={valorant} alt="..."/>
          </Logo>
        <SideRight>
            <Avatar />
            <strong>cSharpe</strong>
        </SideRight>
        </Container>
      </Wrapper>
  );
}

export default Header;