import seguridad from "../assets/seguridad.png"
function Categorias(){
    return(
        <section id="cats">
        <h2>Categorías</h2>
        <div id="cat-container">
        <article id="seg-card" className="cat-card">
            <button>Seguridad Industrial</button>
        </article>
        <article id="ind-card" className="cat-card">
            <button></button>
        </article>
        <article id="merch-card" className="cat-card">
            <button></button>
        </article>
        </div>
        </section>
    )
}

export default Categorias