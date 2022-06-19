import React from 'react';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyles';

import { Container } from './styles';

type props = {
  children: JSX.Element
}

const Layout: React.FC<props> = ({children}) => {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Container>
        {children}
     </Container>
    </>
  )
}

export default Layout;