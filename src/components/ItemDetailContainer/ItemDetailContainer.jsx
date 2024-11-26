import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import mockProducts from "../../async-mocks.js";

export const ItemDetailContainer = () => {

    const {productId} = useParams()

    const product = mockProducts.find(item => item.id === parseInt(productId))

    if(!product){
        return <p>Producto no encontrado</p>
    }

  return (
    <div className="container mt-5">
        <h3 className="card-subtitle text-success text-uppercase">{product.category}</h3>
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
            <h2 className="card-title text-primary">{product.name}</h2>
            <p className="card-text text-muted">{product.description}</p>
            <p className="text-dark fw-bold fs-4 mt-3">Precio: {product.price}</p>
        </div>
    </div>
</div>
  )
}
