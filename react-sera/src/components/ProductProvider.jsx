import { createContext , useContext, useState} from "react"

const productContext = createContext(); // Inicializo el hook (como con todos los hooks) (podria exportar esto directamente pero lo siguiente hace el codigo mas elegante)

export function useProductContext(){ // Esta funcion se hace por terminos de encapsulacion y de no tener que hacer 2 importaciones (useContext y productContext)
    return useContext(productContext)
}
export function ProductProvider({children}){ // al importar este componente todo lo que este dentro es afectada por el providerbvg
    const [products, setProducts] = useState([
        {
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
            nombre: "Buzo de friza",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 6,
            nombre: "Buzo polar Rust",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 7,
            nombre: "Camisa Oxford",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 8,
            nombre: "Camisa de trabajo",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 9,
            nombre: "Camisa de trabajo reflectiva",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 10,
            nombre: "Camiseta de futbol",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 11,
            nombre: "Campera de egresado",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 12,
            nombre: "Chaleco reflectivo",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 13,
            nombre: "Chomba Pique combinada",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 14,
            nombre: "Chomba Pique",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 15,
            nombre: "Gorra 5 gajos",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 16,
            nombre: "Gorra 6 gajos",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 17,
            nombre: "Jean azul",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 18,
            nombre: "Pantalón gabardina",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 19,
            nombre: "Pantalón cargo",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 20,
            nombre: "Pantalón de trabajo",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          },
          {
            id: 21,
            nombre: "Stickers",
            precio: 200,
            descripcion: "Descripción del producto 2",
            imagen: "/imagenes/producto2.jpg"
          }
    ]); // Intercambiable por useReducer
    return(
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}