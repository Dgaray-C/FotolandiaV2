import React from 'react'
import './ItemListContainer.css';
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import mockProducts from "../../async-mocks.js";

const ItemListContainer = () => {

    const {categoryId} = useParams()
    const  filteredProducts = categoryId ? mockProducts.filter(product => product.category === categoryId) : mockProducts;

  return (
    <div>
        <h2 className='mt-5 text-secondary'>{categoryId ? categoryId.toUpperCase() : ''}</h2>
        <div className="container text-center mt-4">
            <div className="row g-2 justify-content-center">
                {filteredProducts.map(product => (
                    <div key={product.id} className="col-4 d-flex justify-content-center">
                        <div className="card"  >
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link to={`/product/${product.id}`}><button>Ver Aqui</button></Link>
                            </div>   
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ItemListContainer