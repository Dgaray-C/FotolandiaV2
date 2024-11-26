import "./NavBar.css";
import {Link} from 'react-router-dom'
import CardWidget from "../CardWidget/CardWidget";


const NavBar = () => {
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <div className="navbar-container">
                    <a className="navbar-brand" href="#">Fotolandia</a>
                    <div className="navbar-links">
                        <ul className="navbar-list">
                            <li className="navbar-item"><Link to="/">Productos</Link></li>
                            <li className="navbar-item"><Link to="/category/drones">Drones</Link></li>
                            <li className="navbar-item"><Link to="/category/camaras">Camaras</Link></li>
                            <li className="navbar-item"><Link to="/category/lentes">Lentes</Link></li>
                            <li className="navbar-item"><Link to="/category/iluminacion">Iluminacion</Link></li>
                        </ul>
                        <div className="CardWidget-item">
                            <CardWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default NavBar;