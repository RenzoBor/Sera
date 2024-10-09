import { useParams } from "react-router-dom"
function Categoria(){
    let param = useParams();
    console.log(param.cat);
    
    return(
        <main id="cat-section">
            <h2>{param.cat}</h2>
            <section id="cat-main">
            <section id="cat-list"></section>
            <section id="cat-galeria"></section>
            </section>
        </main>
    )
}

export default Categoria