import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
  background-color: var(--primary);
  display: flex;
  position: relative;
  overflow-x: hidden;

  >img{
    position: absolute;
    height: 100%;
  }
`;
export const Container = styled.div`
  display: flex ;
  width: 90%;
  max-width: 1120px;
  color: white;
  position: relative;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: transparent;
  -webkit-text-stroke: 3px white;
  position: absolute;
  font-size: 5rem;
  left: 0;
  margin: 20px 0 0 0;

  @media(min-width: 992px){
      -webkit-text-stroke: 6px white;
      font-size: 10vh;
      width:1px;
      word-wrap: break-word;
      white-space: pre-wrap;
      align-self:center ;
    }
`
export const ChildrenWrapper = styled.div`
  width: 100%;
  margin-top: calc(70px + 10vh);

  @media(max-width: 576px){
    overflow:hidden;
  }
  @media(min-width: 992px){
    width: calc(100% - 110px) ;
    margin: auto 0;
    margin-left: 110px;
  }
  @media(min-width: 1200px){
    width: calc(100% - 200px) ;
    margin-left: 200px;
  }
`