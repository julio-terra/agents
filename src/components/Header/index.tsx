import React from 'react';
import { Wrapper,
  Container,
  Logo,
  SideRight,
  Avatar } from './styles';

import valorant from '../../assets/valorant.png';
import riot from '../../assets/riotgames.png';


const Header: React.FC = () => {
  return (
      <Wrapper>
        <Container>
          <Logo>
            <img src={riot} />
            <hr />
            <img src={valorant} />
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