import Button from "../UI/Button/Button"
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from "./HeroStyles"
import img from "../../img/principal.jpg"

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1> Inmobiliaria Rocca</h1>
            <h2> Numero uno consiguiendo hogares </h2>
            <p>  Tu consulta no es molestia </p>
            <Button radius="15">
                VER MAS
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src={img} alt="ImgPrincipal" />
        </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero

