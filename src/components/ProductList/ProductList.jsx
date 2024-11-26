import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import mockProducts from "../../async-mocks.js";


const ProductList = () => {

    const {categoryId} = useParams()
    const  filteredProducts = categoryId ? mockProducts.filter(product => product.category === categoryId) : mockProducts;

  return (
    <div>
        <h2>Todos los Productos</h2>
        <ul>
            {filteredProducts.map(product => (<li key={product.id}><Link to={`/product/${product.id}`}>{product.name}</Link></li> ))}
        </ul>
    </div>
  )
}

export default ProductList