import wsp from "../assets/ico-whatsapp.png"
import ig from "../assets/ico-instagram.png"
import fb from "../assets/ico-facebook.png"
function Footer(){
    return(
        <footer>
        <h3 id="contacto">Contacto</h3>
        <section id="footerMain">
            <section id="footerLeft">
                <p>3415603442</p>
                <p>Rosario, Argentina</p>
                <p>Cotexar.producto@gmail.com</p>

            </section>
            <section id="footerRight">
                    <a target="blank" href="https://wa.me/+543415603442"><img className="icon" src={wsp} alt="Icono Whatsapp"/></a>
                    <a target="blank" href="https://www.instagram.com/gibor_cotexar/"><img className="icon" src={ig} alt="Icono Instagram"/></a>
                    <a target="blank" href="https://www.facebook.com/profile.php?id=100046605716105"><img className="icon" src={fb} alt="Icono Facebook"/></a>
            </section>
        </section>
    </footer>
    )
}
export default Footer