import noimage from '../../public/productos/noimage.jpg'
export function Card({props}){
    return(
        <article className='card'>
            <img src={noimage} alt="Imagen de producto" />
            <div className='card-content'>
            <h3>Producto equis</h3>
            <p>producto re copado xddddd</p>
            </div>
        </article>
    )
}