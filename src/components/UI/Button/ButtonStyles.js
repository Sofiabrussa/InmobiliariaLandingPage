import styled from "styled-components";
import {motion} from "framer-motion"


export const StyledButton = styled(motion.button) `
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: ${({radius}) => `${radius}px`};  /*$llaves se utiliza para combinar valores de JavaScript dentro de una cadena de texto. Se pasa por parametro el radio y se transforma en 10px por ejemplo */ 
    background: var(--btn-gradient);
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    &:hover {
        opacity: 95%;
    }
    &:disabled { /*Cuando el boton este = disabled, no te permite tocarlo */
        cursor: not-allowed;
        opacity: 0.5;
    }
`