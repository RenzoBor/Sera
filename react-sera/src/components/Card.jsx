import noimage from '../../public/productos/noimage.jpg'
function Card({product}){
    return(
        <article className='card'>
            <img src={product.imagen ? product.imagen : noimage} alt="Imagen de producto" />
            <div className='card-content'>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            </div>
        </article>
    )
}
export default Card