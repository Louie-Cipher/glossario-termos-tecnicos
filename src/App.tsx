import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import GameOver from './Components/GameOver';
import Start from './Components/Start';
import { questions as questionsJSON } from './questions.json';
import * as Comp from './styles';

import zeldaItem from './assets/sounds/zelda-item.mp3';
import wrong1 from './assets/sounds/wrong1.mp3';
import missionPassed from './assets/sounds/gta-mission-passed.mp3';

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

    const [playSuccess] = useSound(zeldaItem, { volume: 0.25 });
    const [playWrong] = useSound(wrong1, { volume: 0.25 });
    const [playGameOver] = useSound(missionPassed, { volume: 0.25 });

    const loadQuestions = () => {
        setQuestions(questionsJSON.sort(() => Math.random() - 0.5));
    };

    useEffect(loadQuestions, []);

    const startGame = () => {
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
        if (answer === questions[round - 1].rightAnswer) {
            setPoints(points + 1);
            playSuccess();
        } else playWrong();

        setShowAnswer(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (round === questions.length) handleGameOver();
        else {
            setRound(round + 1);
            setCurrentQuestion(questions[round]);
            setAnswers(randomizeAnswers(questions[round]));
        }
        setShowAnswer(false);
    };

    const handleGameOver = () => {
        setCurrentScreen('gameOver');
        playGameOver();
    };

    return (
        <Comp.App>
            <Comp.Title>Quiz - Glossário de termos técnicos</Comp.Title>
            <Comp.Content>
                {currentScreen === 'init' && <Start initGame={startGame} />}
                {currentScreen === 'gameOver' && (
                    <GameOver points={points} questionsCount={questions.length} startGame={startGame}/>
                )}
                {currentScreen === 'game' && (
                    <Comp.Question>
                        <Comp.Info>
                            <Comp.CurrentRound>
                                Termo {round}
                                <Comp.TotalRounds>/{questions.length}</Comp.TotalRounds>
                            </Comp.CurrentRound>
                        </Comp.Info>
                        <Comp.QuestionTitle>"{questions[round - 1].title}"</Comp.QuestionTitle>
                        <Comp.QuestionAnswers>
                            {answers.map((answer, index) => (
                                <Comp.QuestionAnswer
                                    key={index}
                                    onClick={() => handleAnswer(answer)}
                                    style={{
                                        backgroundColor: showAnswer
                                            ? answer === questions[round - 1].rightAnswer
                                                ? '#33dc33d1'
                                                : '#a81e1e'
                                            : '#1e1e1e',
                                    }}
                                >
                                    "{answer}"
                                </Comp.QuestionAnswer>
                            ))}
                        </Comp.QuestionAnswers>

                        {points > 0 && (
                            <Comp.Points>
                                {points} {points > 1 ? 'pontos' : 'ponto'}
                            </Comp.Points>
                        )}
                    </Comp.Question>
                )}
            </Comp.Content>
        </Comp.App>
    );
};
