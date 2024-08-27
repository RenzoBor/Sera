import constr from "../assets/construccion.png";

function Construccion(){

    return(
        <section id="construccion">
            <img src={constr} alt="Obra en construcción" />
            <span>Sitio web en construcción.</span>
            <span>Para consultas o presupuestos, comunicarse a través de whatsapp.</span>
        </section>
    )
}

export default Construccion;