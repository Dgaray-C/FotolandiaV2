import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import mockProducts from "../../async-mocks.js";

export const ProductDetail = () => {

    const {productId} = useParams()

    const product = mockProducts.find(item => item.id === parseInt(productId))

    if(!product){
        return <p>Producto no encontrado</p>
    }

  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.category}</h3>
    </div>
  )
}
