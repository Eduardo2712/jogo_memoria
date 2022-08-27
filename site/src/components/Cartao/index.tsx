import Container from "./estilo";

type Props = {
    titulo: string;
    id_par: string;
    click: (e: unknown) => void;
};

const Cartao = (props: Props) => {
    return (
        <Container>
            <div className="bloco_cartao" onClick={(e) => console.log(e)}>
                <p className="titulo">{props.titulo}</p>
            </div>
        </Container>
    );
};

export default Cartao;
