import * as Comp from './styles';

interface Props {
    initGame: () => void;
}

export default ({ initGame }: Props) => {
    return (
        <>
            <Comp.InitMessage>
                Será apresentado um termo técnico, e algumas possíveis definições.
                <br />
                Você precisa descobrir qual a definição correta
            </Comp.InitMessage>
            <Comp.StartButton onClick={initGame}>Começar</Comp.StartButton>
        </>
    );
};
