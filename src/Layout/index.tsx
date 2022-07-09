import React from 'react';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyles';

import background from '../assets/background.png';

import { useLoading } from '../hooks/loading';
import { Wrapper, Container, Title, ChildrenWrapper } from './styles';
import { Loading } from '../components/Loading';

type props = {
  children?: JSX.Element
  title?: String
}
const Layout: React.FC<props> = ({children, title}) => {
  const { isLoading } = useLoading()
  return (
    <>
     <GlobalStyle />
     <Header />
     <Wrapper>
        <img
          src={background}
          alt=""
        />
        <Container>
          {
            isLoading?(
              <Loading />
            )
            :(
              <>
              <Title>
                {title}
              </Title>
              <ChildrenWrapper>
                {children}
              </ChildrenWrapper>
              </>
            )
          }
        </Container>
     </Wrapper>
    </>
  )
}

export default Layout;