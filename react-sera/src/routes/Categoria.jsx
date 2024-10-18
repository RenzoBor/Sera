import { useParams } from "react-router-dom"
import { useProductContext } from "../components/ProductProvider";
import  Card  from "../components/Card.jsx";
function Categoria(){
    const products = useProductContext()
    let param = useParams();
    console.log(param.cat);
    console.log(products)
    
    return(
        <main id="cat-section">
            <h2>{param.cat}</h2>
            <section id="cat-main">
            <section id="cat-list"></section>
            <section id="cat-galeria"><Card/></section>
            </section>
        </main>
    )
}

export default Categoria