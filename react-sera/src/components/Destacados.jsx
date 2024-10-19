import { useProductContext } from "./ProductProvider";
import { useEffect , useState} from "react";
import Card from "./Card.jsx"

export function Destacados(){
    const productos = useProductContext()
    const [destacados, setDestacados] = useState(null)
    useEffect(() => {
      let randoms = []
      let products = []
      while(randoms.length < 6){
        let num = Math.floor(Math.random()*productos.length)+1 // genero numero aleatorio entre 0 y el numero de productos
        if(!randoms.includes(num))randoms.push(num)}           // logica para evitar repeticiones
      productos.forEach(e => {
        for(let i = 0; i < 6; i++){
          if(e.id === randoms[i]){
            products.push(e)
          }
        }
      });
      setDestacados(products)
    }, [])
    
    return(
        <section className="destacados">
            <h3>Productos destacados:</h3>
            <section className="destacados-galeria">{destacados ? destacados.map(e => (<Card key={e.id} product = {e}/>)) : <p>Cargando productos</p>}</section>
        </section>
    )
}