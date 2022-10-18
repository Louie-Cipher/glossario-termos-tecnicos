import styled from 'styled-components';

export const InitMessage = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 20px 0;
`;

export const StartButton = styled.button`
    background-color: #faea;
    color: #000a;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    border: 0;
    border-radius: 5px;
    box-shadow: inset -2px -2px 4px #000a, 2px 2px 4px #000a;
    height: 50px;
    margin: 30px 0 0;
    transition: all 0.2s;
    :hover {
        box-shadow: inset -2px -2px 4px #000a, inset 2px 2px 4px #000a;
        background-color: #fae8;
        transition: all 0.2s;
    }
    :active {
        box-shadow: inset -2px -2px 4px #000e, inset 2px 2px 4px #000e;
        background-color: #fae8;
        transition: all 0.2s;
    }
`;
