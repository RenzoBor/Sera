import banner from "../assets/fondo.png"

function Banner() {
    return (
        <section id="banner-container">
            <img id="banner" src={banner} alt="Banner principal" />
            <section id="text-container">
                <span className="text-banner">SOMOS FABRICANTES</span>
                <span className="text-banner">INDUMENTARIA PARA EMPRESAS</span>
                <span className="text-banner">SEGURIDAD INDUSTRIAL</span>
                <span className="text-banner">MERCHANDISING</span>
                <button>Productos</button>
            </section>
        </section>
    )
}
export default Banner