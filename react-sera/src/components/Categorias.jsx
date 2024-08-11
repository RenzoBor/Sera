import seguridad from "../assets/seguridad.png"
import merchand from "../assets/merchandising.jpg"
function Categorias(){
    return(
        <section id="cats">
        <h2>Categorías</h2>
        <div id="cat-container">
        <article id="seg-card" className="cat-card">
            <button>Seguridad Industrial</button>
            <div className="filter"></div>
        </article>
        <article id="ind-card" className="cat-card">
            <button>Indumentaria para empresas</button>
            <div className="filter"></div>
        </article>
        <article id="merch-card" className="cat-card">
            <button>Merchandising</button>
            <div className="filter"></div>
        </article>
        </div>
        </section>
    )
}

export default Categorias