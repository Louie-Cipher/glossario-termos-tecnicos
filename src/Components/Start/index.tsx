import * as Comp from './styles';

interface Props {
    initGame: () => void;
}

export default ({ initGame }: Props) => {
    return (
        <>
            <Comp.InitMessage>
                Um quiz sobre termos técnicos da área de TI
            </Comp.InitMessage>
            <Comp.StartButton onClick={initGame}>Começar</Comp.StartButton>
        </>
    );
};
