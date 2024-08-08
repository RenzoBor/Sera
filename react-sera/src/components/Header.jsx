import { Link } from "react-router-dom"
import logoGibor from "../assets/LOGO_GIBOR.jpg"

function Header() {
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
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </div>
                <img src={logoGibor} alt="Logo Gibor"></img>
            </header>
        </>
    )
}
export default Header