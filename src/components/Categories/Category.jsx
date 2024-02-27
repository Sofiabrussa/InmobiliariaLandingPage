import { BorderDecoration, CardCategoriaStyled } from "./CategoriesStyles"

const Category = ({img, title, category}) => {
  return ( 
    <CardCategoriaStyled whileTap={{scale:0.95}}>
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <BorderDecoration></BorderDecoration>
    </CardCategoriaStyled>
  )
}

export default Category
