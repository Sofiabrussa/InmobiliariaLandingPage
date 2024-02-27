import styled from "styled-components"

export const NavbarContainerStyle = styled.header `
    height: 100px;
    background-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
`;

export const LinksContainerStyled = styled.div `
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a  {
        padding: 1rem 1.5rem;
    }
    a:first-child {
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    a:first-child:hover  {
        background-color: var(--orange-bg);
    } 
`;

export const LinkContainerStyled = styled.div `
    font-size: 1.2rem;
    align-items: center;
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")}; /*Si la propiedad home está presente y es verdad, el color será #ff9d01; de lo contrario, será #ff9300 */
`

export const UserContainerStyled = styled(LinkContainerStyled) ` /* Traigo todos los estilos definidos el componente entre () */
    display: flex;
`
export const HomeContainerStyled = styled(LinkContainerStyled) `
    display: flex;
    @media (max-width: 769px) {
        display: none;
    }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)  ` 
    display: none;
    cursor: pointer;
    font-size: 2rem;
    @media (max-width: 769px) {
        display: flex;
    }
`

export const UserNavStyled = styled.div  `  
    gap: 15px;
    cursor: pointer;
    span  {
        color: white;
        margin-left: 10px;
        font-size: 1.2rem;
    }
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-left: 1rem;
    @media (max-width: 768px) {
        display: none;
    }
` 
export const SpanStyled = styled.span  ` 
    &:hover  {
        text-decoration: underline;
    }
`


