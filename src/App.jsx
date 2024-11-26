import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import Nav from './components/Nav/Nav.jsx'
import ProductList from './components/ProductList/ProductList.jsx'
import { ProductDetail } from './components/ProductDetail/ProductDetail.jsx'



function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/product/:productId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>

  )
}

export default App
