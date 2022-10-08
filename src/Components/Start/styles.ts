import styled from 'styled-components';

export const InitMessage = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 20px 0;
`;

export const StartButton = styled.button`
    background-color: #fae;
    color: #000a;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 0 5px #000a;
    height: 50px;
    margin: 30px 0 0;
    transition: all 0.2s;
    :hover {
        background-color: #faea;
        font-size: 22px;
        transition: all 0.2s;
    }
    :active {
        background-color: #faea;
        font-size: 22px;
        transition: all 0.2s;
    }
`;