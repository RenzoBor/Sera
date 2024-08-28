import wspLogo from "../assets/whatsapp_logo.png"

function Whatsapp(){
    return(
        <a target="blank" href="https://wa.me/+543415603442">
            <img id="floating-wsp" src={wspLogo} alt="Whatsapp sticker" />
        </a>
    )
}

export default Whatsapp