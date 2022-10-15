import * as Comp from './styles';

const Phrase = (percentage: number) => {
    if (percentage === 100) return '🎉 Parabéns, acertou tudo! 🎉';
    if (percentage >= 80) return '🎉 Muito bom! 🎉';
    if (percentage > 50) return 'Bom! :)';
    if (percentage === 50) return 'Metade certa, metade errada. 😐';
    if (percentage >= 30) return '🤔 Pode melhorar...';
    if (percentage > 0) return 'Muito ruim 😢';
    return 'Errou tudo... Ruim demais kk 🤣';
};

interface Props {
    points: number;
    questionsCount: number;
    startGame: () => void;
}

export default ({ points, questionsCount, startGame }: Props) => {
    return (
        <Comp.GameOver>
            <Comp.GameOverTitle>Fim de jogo!</Comp.GameOverTitle>
            <Comp.GameOverMessage>
                Você acertou {points} de {questionsCount} termos
                <br />
                {Phrase(Math.round((points / questionsCount) * 100))}
            </Comp.GameOverMessage>

            <Comp.PlayAgainButton onClick={startGame}>Jogar novamente</Comp.PlayAgainButton>
        </Comp.GameOver>
    );
};
