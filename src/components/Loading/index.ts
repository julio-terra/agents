import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(359deg);
    }
`;

export const Loading = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-bottom: 5px solid rgb(265 , 265, 265, 0.5);
    border-left: 5px solid rgb(265 , 265, 265, 0.8);
    border-top: 5px solid white;
    margin: auto;
    animation: ${animation} 0.5s 0s infinite linear;
`;