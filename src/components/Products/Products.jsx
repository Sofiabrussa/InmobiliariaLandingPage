import { ProductsContainer, ProductsWrapper } from "./ProductsStyled"
import  {products} from "../../data/Products"
import Product from "./Product"

const Products = () => {
  return (
    <ProductsWrapper>
        <h2> Nuestros Productos </h2>
        <ProductsContainer>
            {
                products.map((product) => {
                    return <Product key={product.key} {...product}/>
                })
            }
        </ProductsContainer>
    </ProductsWrapper>
  )
}

export default Products
