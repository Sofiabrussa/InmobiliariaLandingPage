import Button from "../UI/Button/Button"
import { CardPrice, CardPriceContainer, ProductCard } from "./ProductsStyled"


const Product = ({img, title, desc, price}) => {
  return (
    <ProductCard>
        <img src={img} alt= {title} />
        <h2>{title} </h2>
        <p> {desc}</p>
        <CardPriceContainer>
            <CardPrice> {price}</CardPrice>
            <Button> 
                Agregar
            </Button>

        </CardPriceContainer>
    </ProductCard>
  )
}

export default Product
