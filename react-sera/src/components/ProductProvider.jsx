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
            imagen: "../../public/productos/bermuda-trabajo.webp",
            categoria:""
          },
          {
            id: 2,
            nombre: "Birome",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/boligrafo.jpg",
            categoria:""
          },
          {
            id: 3,
            nombre: "Botín P91BR",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/botin-p91br.jpg",
            categoria:""
          },
          {
            id: 4,
            nombre: "Buzo polar combinado",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/Buzo Polar combinado_1444.jpg",
            categoria:""
          },
          {
            id: 5,
            nombre: "Buzo de friza",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/buzo-friza.webp",
            categoria:""
          },
          {
            id: 6,
            nombre: "Buzo polar Rust",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/buzo-polar-hombre-Rust.jpg",
            categoria:""
          },
          {
            id: 7,
            nombre: "Camisa Oxford",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/camisa-oxford.png",
            categoria:""
          },
          {
            id: 8,
            nombre: "Camisa de trabajo",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/camisa-trabajo.webp",
            categoria:""
          },
          {
            id: 9,
            nombre: "Camisa de trabajo reflectiva",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/camisa-trabajo-reflectivo.webp",
            categoria:""
          },
          {
            id: 10,
            nombre: "Camiseta de futbol",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/camiseta-futbol.jpg",
            categoria:""
          },
          {
            id: 11,
            nombre: "Campera de egresado",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/campera-egresado.webp",
            categoria:""
          },
          {
            id: 12,
            nombre: "Chaleco reflectivo",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/chaleco-reflectivo.jpg",
            categoria:""
          },
          {
            id: 13,
            nombre: "Chomba Pique combinada",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/Chomba pique combinada.jpg",
            categoria:""
          },
          {
            id: 14,
            nombre: "Chomba Pique",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/chomba-lisa-de-pique.jpg",
            categoria:""
          },
          {
            id: 15,
            nombre: "Gorra 5 gajos",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/gorra-5-gajos.jpg",
            categoria:""
          },
          {
            id: 16,
            nombre: "Gorra 6 gajos",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/gorra-6-gajos.webp",
            categoria:""
          },
          {
            id: 17,
            nombre: "Jean azul",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/jean-azul.jpg",
            categoria:""
          },
          {
            id: 18,
            nombre: "Pantalón gabardina",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/pantalon-gabardina-devestir.jpg",
            categoria:""
          },
          {
            id: 19,
            nombre: "Pantalón cargo",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/pantalon-trabajo-cargo.jpg",
            categoria:""
          },
          {
            id: 20,
            nombre: "Pantalón de trabajo",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/pantaon-trabajo.jpg",
            categoria:""
          },
          {
            id: 21,
            nombre: "Stickers",
            descripcion: "Descripción del producto 2",
            imagen: "../../public/productos/sticker.jpg",
            categoria:""
          }
    ]); // Intercambiable por useReducer
    return(
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}