import { useEffect, useRef, useState } from "react";
import Cartao from "./components/Cartao";
import Container from "./estilo";

const App = () => {
    const [valores, setValores] = useState<number[]>([]);
    const refPrimeiro = useRef(null);
    const refSegundo = useRef(null);

    const prepararValores = (quantidade_pares: number) => {
        let i = 0;
        const valores: Array<number> = [];

        while (i < quantidade_pares) {
            const valor = Math.floor(Math.random() * 99) + 1;

            valores.push(valor);
            valores.push(valor);

            i++;
        }

        return embaralharValores(valores);
    };

    const embaralharValores = (valores: Array<number>) => {
        for (let i = valores.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [valores[i], valores[j]] = [valores[j], valores[i]];
        }
        return valores;
    };

    const click = (e: unknown) => {
        console.log(e);
        if (!refPrimeiro) {
        }
    };

    useEffect(() => {
        setValores(prepararValores(10));
    }, []);

    return (
        <Container>
            <div className="bloco_jogo">
                {valores.map((valor, index) => {
                    return (
                        <Cartao
                            key={index}
                            titulo={valor.toString()}
                            id_par={valor.toString()}
                            click={click}
                        ></Cartao>
                    );
                })}
            </div>
        </Container>
    );
};

export default App;
