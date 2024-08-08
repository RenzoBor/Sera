import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Categorias from "../components/Categorias";

function Home(){
    return(
        <>
        <Banner/>
        <Categorias/>
        </>
    )
}
export default Home