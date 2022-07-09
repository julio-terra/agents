import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 70px;
    
    background-color: var(--secondary);
    display: block;
`;
export const Container = styled.div`
    width: 90%;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    align-items:center;
    cursor: pointer;
    img{
        height: 30px;
    }
    hr{
        background-color: white;
        width: 50px;
        height: 1px;
        transform: rotate(90deg) ;
    }
`;
export const Br = styled.div`
    width: 2px;
    height: 30px;
    background: var(--white);
`;
export const SideRight = styled.div`
    display: flex;
    align-items: center;
    color: white;

`;
export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;
    background: var(--gray);
    border-radius: 50%;
`;