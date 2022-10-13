import { useEffect, useState } from 'react';
import * as Sound from './sounds';
import GameOver from './Components/GameOver';
import Start from './Components/Start';
import { questions as questionsJSON } from './questions.json';
import * as Comp from './styles';
import { Howler } from 'howler';

export interface Question {
    title: string;
    rightAnswer: string;
    wrongAnswers: string[];
}

export default () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentScreen, setCurrentScreen] = useState('init');
    const [currentQuestion, setCurrentQuestion] = useState<Question>();
    const [answers, setAnswers] = useState<string[]>([]);
    const [points, setPoints] = useState(0);
    const [round, setRound] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const loadQuestions = () => {
        setQuestions(questionsJSON.sort(() => Math.random() - 0.5));
    };

    useEffect(loadQuestions, []);

    const startGame = () => {
        Howler.stop();
        loadQuestions();
        setCurrentScreen('game');
        setPoints(0);
        setRound(1);
        setCurrentQuestion(questions[0]);
        setAnswers(randomizeAnswers(questions[0]));
    };

    const randomizeAnswers = (question: Question) => {
        const answers = [...question.wrongAnswers, question.rightAnswer];
        return answers.sort(() => Math.random() - 0.5);
    };

    const handleAnswer = async (answer: string) => {
        if (showAnswer) return;
        const newPoints = answer === currentQuestion?.rightAnswer ? points + 1 : points;
        setPoints(newPoints);
        Sound.play(
            answer === currentQuestion?.rightAnswer ? Sound.CorrectSound() : Sound.WrongSound()
        );

        setShowAnswer(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setRound(round + 1);
        if (round === questions.length) handleGameOver(newPoints);
        else {
            setCurrentQuestion(questions[round]);
            setAnswers(randomizeAnswers(questions[round]));
        }
        setShowAnswer(false);
    };

    const handleGameOver = (currentPoints: number) => {
        setCurrentScreen('gameOver');
        if (currentPoints / questions.length >= 0.5) Sound.play(Sound.GameWinSound());
        else Sound.play(Sound.GameLoseSound());
    };

    return (
        <Comp.App>
            <Comp.Title>Quiz - Glossário de termos técnicos</Comp.Title>
            <Comp.Content>
                {currentScreen === 'init' && <Start initGame={startGame} />}
                {currentScreen === 'gameOver' && (
                    <GameOver
                        points={points}
                        questionsCount={questions.length}
                        startGame={startGame}
                    />
                )}
                {currentScreen === 'game' && (
                    <Comp.Question>
                        <Comp.Info>
                            <Comp.CurrentRound>
                                Pergunta {round}
                                <Comp.TotalRounds>/{questions.length}</Comp.TotalRounds>
                            </Comp.CurrentRound>
                            {round > 1 && (
                                <Comp.Points>
                                    {points} {points > 1 ? 'pontos' : 'ponto'}
                                </Comp.Points>
                            )}
                        </Comp.Info>
                        <Comp.QuestionTitle>
                            {currentQuestion?.title
                                .split('*')
                                .map((text, index) =>
                                    index % 2 === 0 ? (
                                        text
                                    ) : (
                                        <Comp.QuestionTitleBold>{text}</Comp.QuestionTitleBold>
                                    )
                                )}
                        </Comp.QuestionTitle>
                        <Comp.QuestionAnswers>
                            {answers.map((answer, index) => (
                                <Comp.QuestionAnswer
                                    key={index}
                                    onClick={() => handleAnswer(answer)}
                                    style={{
                                        cursor: showAnswer ? 'not-allowed' : 'pointer',
                                        backgroundColor: showAnswer
                                            ? answer === questions[round - 1].rightAnswer
                                                ? '#33dc33d6'
                                                : '#a81e1ed6'
                                            : '#1e1e1e',
                                    }}
                                >
                                    {answer}
                                </Comp.QuestionAnswer>
                            ))}
                        </Comp.QuestionAnswers>
                    </Comp.Question>
                )}
            </Comp.Content>
        </Comp.App>
    );
};
