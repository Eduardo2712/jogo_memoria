import styled from "styled-components";

const Container = styled.div`
    .bloco_cartao {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #61c5ff;
        border-radius: 0.2rem;
        height: 5rem;
        width: 4rem;
        cursor: pointer;
        box-shadow: 0.2rem 0.2rem 0.6rem 0.01rem black;
    }

    .titulo {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 900;
        color: #fff;
    }

    @keyframes girar_carta {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(180deg);
        }
    }

    .girar {
        animation-name: girar_carta;
        animation-duration: 2s;
        transform: rotateY(180deg);
    }
`;

export default Container;
