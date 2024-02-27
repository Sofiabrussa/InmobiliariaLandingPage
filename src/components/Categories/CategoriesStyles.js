import styled from "styled-components";
import {motion} from "framer-motion";

export const CategoriasWrapper = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0px 15px;
    @media (max-width: 768px) {
        padding-top: 30px;
        text-align: center;
    }
`
export const CategoriasContainerStyled = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 80px;
`

export const CardCategoriaStyled = styled(motion.div) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 150px;
    height: 100%;
    padding: 2rem 0.5rem;
    border-radius: 15px;
    cursor: pointer;
    h2 {
        font-size: 1rem;
    }
    img {
        width: 190px;
        height: 190px;
        object-fit: cover;
    }
`;

export const BorderDecoration = styled.div `
    height: 5px;
    width: 30%;
    border-radius: 15px;
    background: var(--btn-gradient);
`;