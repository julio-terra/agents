import styled from "styled-components"


export const Wrapper = styled.div`
    max-width: 230px;
    border-top-left-radius:10px ;
    height: 400px;
    background-color: var(--secondary);
    overflow: hidden;

    @media(min-width: 992px){
        max-width: 250px;
        border-top-left-radius:10px ;
        height: 500px;
        background-color: var(--secondary);
        overflow: hidden;
    }
`;
export const Champion = styled.img`
    height: 100%;
    overflow:hidden;
    cursor: pointer;
    position: relative;
    left: -40%;
`;