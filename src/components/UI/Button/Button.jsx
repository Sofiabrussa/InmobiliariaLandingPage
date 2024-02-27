import { StyledButton } from "./ButtonStyles"

const Button = ({radius="32", disabled= false, children}) => { /*El parametro radius es porque hay botones que tienen diferentes radios. Si no pasan el radio del mismo, el valor es 32*/
  return (
    <StyledButton disabled={disabled} radius={radius}> {/*Recibe los parametros del componente button y se lo pasa a styledButton */}
        {children}
    </StyledButton>
  )
}

export default Button
