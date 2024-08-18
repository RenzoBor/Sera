import { Link } from "react-router-dom"
import { useState } from "react"
import logoGibor from "../assets/LOGO_GIBOR.jpg"

function Header() {
 const [bClass, setBClass] = useState(false)
 const toggleBurguer = () => {
    setBClass(!bClass)
 }
    return (
        <>
            <div id="header-wrapper"></div>
            <header>

                <div id="header-left">
                    <h1>Cotexar</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/">Productos</Link></li>
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