import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoundInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const CurrentRound = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const TotalRounds = styled.span`
    font-size: 1.2rem;
`;

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const QuestionTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const QuestionAnswers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const QuestionAnswer = styled.button`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;
