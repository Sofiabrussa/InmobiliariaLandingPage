import { HomeContainerStyled, LinksContainerStyled, NavbarContainerStyle, LinkContainerStyled, UserNavStyled, UserContainerStyled, SpanStyled, MenuContainerStyled } from "./NavbarStyles";
import Logo from "../../img/logoWeb.png"
import  {motion} from "framer-motion"
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <>
    <NavbarContainerStyle>
      <div>
        <a href=""> 
          <img src={Logo} alt="Logo" style={{ width: '180px', height: 'auto'}}/>
        </a>
      </div>
      <LinksContainerStyled>
        <HomeContainerStyled>
          <motion.div whileTap={{scale: 0.9 }}>
          <a href="">
            <LinkContainerStyled>
              <AiFillHome />
            </LinkContainerStyled>
            Home
          </a>
          </motion.div>
        </HomeContainerStyled>
        <UserNavStyled>
          <UserContainerStyled> 
              <FaUser />
              <SpanStyled> Iniciar sesión </SpanStyled>
          </UserContainerStyled>
        </UserNavStyled>
        <motion.div whileTap={{scale:0.9}}>
          <MenuContainerStyled> 
            <GiHamburgerMenu />
          </MenuContainerStyled>
        </motion.div>
      </LinksContainerStyled>
    </NavbarContainerStyle>
  </>
  )
}

export default Navbar
