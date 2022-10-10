import * as Comp from './styles';

interface Props {
    initGame: () => void;
}

export default ({ initGame }: Props) => {
    return (
        <>
            <Comp.InitMessage>
                Serão feitas algumas perguntas sobre qual a definição de cada termo,
                <br/>
                ou qual o termo que se refere a definição apresentada.
            </Comp.InitMessage>
            <Comp.StartButton onClick={initGame}>Começar</Comp.StartButton>
        </>
    );
};
