import { useState } from 'react';
import { Question } from '../../App';
import * as Comp from './styles';

interface Props {
    questions: Question[];
}

export default ({ questions }: Props) => {
    const [round, setRound] = useState(0);

    const randomizeAnswers = (question: Question) => {
        const answers = [...question.wrongAnswers, question.rightAnswer];
        return answers.sort(() => Math.random() - 0.5);
    };

    return (
        <Comp.Container>
            <Comp.RoundInfo>
                <Comp.CurrentRound>Termo {round}</Comp.CurrentRound>
                <Comp.TotalRounds>de {questions.length}</Comp.TotalRounds>
            </Comp.RoundInfo>

            <Comp.Question>
                <Comp.QuestionTitle>{questions[round]?.title}</Comp.QuestionTitle>

                <Comp.QuestionAnswers>
                    {randomizeAnswers(questions[round]).map((answer, index) => (
                        <Comp.QuestionAnswer key={index}>{answer}</Comp.QuestionAnswer>
                    ))}
                </Comp.QuestionAnswers>
            </Comp.Question>
        </Comp.Container>
    );
};
