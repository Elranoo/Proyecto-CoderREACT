import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {


return (
    <header>
        <Link to="/">
        <h1>RanoCorp</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to={"/categoria/gabinetes"}>Gabinetes</Link>    
                </li>
                <li>
                    <Link to={"/categoria/motherboards"}>Motherboards</Link>    
                </li>
                <li>
                    <Link to={"/categoria/procesadores"}>Procesadores</Link>
                </li>
                <li>
                    <Link to={"/categoria/memorias"}>Memorias</Link>    
                </li>
                <li>
                    <Link to={"/categoria/graficas"}>Graficas</Link>    
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    
)
}

export default NavBar