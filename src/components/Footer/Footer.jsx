import { LinkContainerStyled } from "../Navbar/NavbarStyles"
import { FooterContainerStyled } from "./FooterStyles"


const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinkContainerStyled>
                <a href="#"> Términos de Uso </a>
        </LinkContainerStyled>
        <p>
            Hecho con ❤️ por <span> Sofia Brussa </span>
        </p>
    </FooterContainerStyled>
 
  )
}

export default Footer
