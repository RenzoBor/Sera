
import Banner from "../components/Banner";
import Categorias from "../components/Categorias";
import { Destacados } from "../components/Destacados";
import { ProductProvider } from "../components/ProductProvider";

function Home(){
    return(
        <>
        <Banner/>
        <Categorias/>
        <Destacados/>
        </>
    )
}
export default Home