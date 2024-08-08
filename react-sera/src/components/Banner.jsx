import banner from "../assets/fondo.png"

function Banner(){
    return(
        <section id="banner-container">
            <img id="banner" src={banner} alt="Banner principal" />
        </section>
    )
}
export default Banner