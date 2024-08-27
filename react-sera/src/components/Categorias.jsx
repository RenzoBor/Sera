import seguridad from "../assets/seguridad.png"
import merchand from "../assets/merchandising.jpg"
import { Link } from "react-router-dom"
const redirect = () => window.location.href= "http://localhost:5173/construccion"
function Categorias(){
    return(
        <section id="cats">
        <h2>Categorías</h2>
        <div id="cat-container">
            <Link className="link">
        <article id="seg-card" className="cat-card">
            <button>Seguridad Industrial</button>
            <div onClick={redirect} className="filter"></div>
        </article>
        </Link>
        <Link className="link">
        <article id="ind-card" className="cat-card">
            <button>Indumentaria para empresas</button>
            <div onClick={redirect} className="filter"></div>
        </article>
        </Link>
        <Link className="link">
        <article id="merch-card" className="cat-card">
            <button>Merchandising</button>
            <div onClick={redirect} className="filter"></div>
        </article>
        </Link>
        </div>
        </section>
    )
}

export default Categorias