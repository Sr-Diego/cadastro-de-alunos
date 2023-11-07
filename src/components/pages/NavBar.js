import Home from './Home';
import Registro from './Registro';
import {BrowserRouter as Router,Routes,Route, Link} from'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    
    return (
      <header className='navegation'>
            <h1 className='H1registro'>Registro de Alunos</h1>
            <Router className='router'>
                <ul className='Lista'>
                    <li className='liNav'><Link className='Link' to="/">Home</Link></li>
                    <li className='liNav' ><Link className='Link' to="/Registro">Registros</Link></li>
                </ul>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/Registro" element={<Registro />}></Route>
                    </Routes>
            </Router>
        </header>
    );
}
  