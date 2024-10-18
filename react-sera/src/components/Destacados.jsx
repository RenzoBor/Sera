import { useProductContext } from "./ProductProvider";
import { useEffect , useState} from "react";
import Card from "./Card.jsx"

export function Destacados(){
    const productos = useProductContext()
    const [randomNum, setRandomNum] = useState(null)
    const [destacados, setDestacados] = useState(null)
    useEffect(() => {
      for(let i = 0; i<=4 ; i++)console.log(Math.floor(Math.random()*productos.length)+1)
      setDestacados( [{
        id: 1,
        nombre: "Bermuda de trabajo",
        descripcion: "Descripción del producto 1",
        imagen: "/imagenes/producto1.jpg"
      },
      {
        id: 2,
        nombre: "Birome",
        descripcion: "Descripción del producto 2",
        imagen: "/imagenes/producto2.jpg"
      },
      {
        id: 3,
        nombre: "Botín P91BR",
        descripcion: "Descripción del producto 2",
        imagen: "/imagenes/producto2.jpg"
      },
      {
        id: 4,
        nombre: "Buzo polar combinado",
        precio: 200,
        descripcion: "Descripción del producto 2",
        imagen: "/imagenes/producto2.jpg"
      },
      {
        id: 5,
        nombre: "Buzo polar combinado",
        precio: 200,
        descripcion: "Descripción del producto 2",
        imagen: "/imagenes/producto2.jpg"
      }])
    }, [])
    
    return(
        <section className="destacados">
            <h3>Productos destacados:</h3>
            <section className="destacados-galeria">{destacados ? destacados.map(e => (<Card key={e.id} product = {e}/>)) : <p>Cargando productos</p>}</section>
        </section>
    )
}