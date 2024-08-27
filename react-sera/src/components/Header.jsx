import { Link } from "react-router-dom"
import { useState , useEffect} from "react"

import logoGibor from "../assets/LOGO_GIBOR.jpg"

function Header() {
 const [bClass, setBClass] = useState(false)
 const [screenSize, setScreeinSize] = useState(screen.width)
 const screenWidth = screen.width
 
 const toggleBurguer = () => {
    setBClass(!bClass)
    console.log(screenWidth);
    
 }


    return (
        <>
            <div id="header-wrapper"></div>
            <header>

                <div id="header-left">
                    <h1 onClick={toggleBurguer}>Cotexar</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="construccion">Productos</Link></li>
                            <li><a href="#footerRight">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <img src={logoGibor} alt="Logo Gibor"></img>
            </header>
        </>
    )
}
export default Header