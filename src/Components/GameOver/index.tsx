import * as Comp from './styles';

interface Props {
    points: number;
    questionsCount: number;
    startGame: () => void;
}

export default ({ points, questionsCount, startGame }: Props) => {
    return (
        <>
            <Comp.GameOver>
                <Comp.GameOverTitle>Fim de jogo!</Comp.GameOverTitle>
                <Comp.GameOverMessage>
                    Você acertou {points} de {questionsCount} termos
                </Comp.GameOverMessage>

                <Comp.PlayAgainButton onClick={startGame}>
                    Jogar novamente
                </Comp.PlayAgainButton>
            </Comp.GameOver>
        </>
    );
};
