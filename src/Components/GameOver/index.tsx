import * as Comp from './styles';

const Phrase = (percentage: number) => {
    if (percentage === 100) return '๐ Parabรฉns, acertou tudo! ๐';
    if (percentage >= 80) return '๐ Muito bom! ๐';
    if (percentage > 50) return 'Bom! :)';
    if (percentage === 50) return 'Metade certa, metade errada. ๐';
    if (percentage >= 30) return '๐ค Pode melhorar...';
    if (percentage > 0) return 'Muito ruim ๐ข';
    return 'Errou tudo... Ruim demais kk ๐คฃ';
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
                Vocรช acertou {points} de {questionsCount} termos
                <br />
                {Phrase(Math.round((points / questionsCount) * 100))}
            </Comp.GameOverMessage>

            <Comp.PlayAgainButton onClick={startGame}>Jogar novamente</Comp.PlayAgainButton>
        </Comp.GameOver>
    );
};
