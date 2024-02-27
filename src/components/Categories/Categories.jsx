import {CategoriasContainerStyled, CategoriasWrapper } from "./CategoriesStyles"
import {categories} from "../../data/Categorias"
import Category from "./Category"

const Categories = () => {
  return (
        <CategoriasWrapper>
            <h2> Categorias </h2>
            <CategoriasContainerStyled>
                 {
                    categories.map((category) => { /*Muestra cada categoria definida*/
                       return <Category key={category.id} {...category}> </Category> /*{...category} le paso como parametro todo lo que hay en mi category*/
                    })
                 }
            </CategoriasContainerStyled>
        </CategoriasWrapper>
  )
}

export default Categories
