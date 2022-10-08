import styled from 'styled-components';

export const GameOver = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const GameOverTitle = styled.p`
    font-size: 2rem;
    font-weight: bold;
`;

export const GameOverMessage = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const PlayAgainButton = styled.button`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #000a;
    background: #41a0cc;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s;

    :hover {
        font-size: 1.2rem;
        transition: all 0.1s;
    }
`;