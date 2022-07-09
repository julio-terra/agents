import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 100px);
    display:flex ;
    justify-content:end;
    position: relative;
`;
export const Champion = styled.img`
    max-height: 100%;
    position: absolute;
    left: -35%;
`;
export const Details = styled.div`
    background: white;
    padding: 50px;
    max-width: 50%;
    margin: auto 0;

    position: relative;

    >h1{
        font-size: 24px;
        font-weight: 600;
        color: var(--secondary)
    }
    >P{
        font-size: 16px;
        color: var(--gray);
        letter-spacing:10%;
        line-height:auto ;
    }
`;
export const Informations = styled.div`
    margin: 30px 0 0 50%;
    >h1{
        font-size: 24px;
        font-weight: 600;
        color: var(--secondary);
        margin-bottom: 0px;
    }
    >div{
        display: flex;
        margin-top: 10px;
    }
    >div > span{
        font-size: 16px;
        font-weight: 700;
        color: var(--drug-white);
        margin-right: 5px;
    }
    > div > strong{
        font-size: 16px;
        font-weight: 700;
        color: var(--secondary);
    }
`;
export const Skills = styled.div`
    width: calc(100% + 100px);
    padding: 10px 0;
    background-color: var(--secondary);
    display: flex ;

    position: relative;
    bottom: -50px;
    left: -50px;
    
    >div{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items:center ;
        justify-content:space-around ;
    }

    > div > img{
        width: 25%;
    }
    > div > h2{
        font-size: 16px;
        margin: 5px 0 0 0;
    }
`;
